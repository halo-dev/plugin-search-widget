import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import { HISTORY_KEY } from '../src/constants';
import type { SearchForm } from '../src/search-form';
import { SearchModal } from '../src/search-modal';

describe('SearchModal focus restoration', () => {
  let fixture: HTMLDivElement;
  let first: HTMLButtonElement;
  let second: HTMLButtonElement;
  let modal: SearchModal;

  beforeEach(async () => {
    fixture = document.createElement('div');
    first = document.createElement('button');
    second = document.createElement('button');
    first.textContent = 'First';
    second.textContent = 'Second';
    modal = new SearchModal();
    fixture.append(first, second, modal);
    document.body.append(fixture);
    await modal.updateComplete;
  });

  afterEach(async () => {
    modal.open = false;
    await modal.updateComplete;
    fixture.remove();
    vi.restoreAllMocks();
  });

  async function open(trigger = first) {
    trigger.onclick = () => {
      modal.open = true;
    };
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await modal.updateComplete;
    const form = modal.shadowRoot?.querySelector('search-form') as SearchForm;
    // Wait for SearchForm's deferred autofocus without a fixed delay.
    await expect
      .poll(() => form.shadowRoot?.activeElement?.tagName)
      .toBe('INPUT');
    return form;
  }

  async function close() {
    await userEvent.keyboard('{Escape}');
    await modal.updateComplete;
    expect(modal.open).toBe(false);
    expect(modal.shadowRoot?.querySelector('search-form')).toBeNull();
  }

  it('restores focus after Escape removes the form', async () => {
    await open();
    await close();
    expect(document.activeElement).toBe(first);
  });

  it('restores focus after clicking the backdrop', async () => {
    await open();
    const backdrop = modal.shadowRoot?.querySelector(
      '.modal__layer'
    ) as HTMLElement;
    await userEvent.click(backdrop, { position: { x: 5, y: 5 } });
    await modal.updateComplete;
    expect(modal.open).toBe(false);
    expect(document.activeElement).toBe(first);
  });

  it('remembers the trigger for each opening', async () => {
    for (const trigger of [first, second, first]) {
      await open(trigger);
      await close();
      expect(document.activeElement).toBe(trigger);
    }
  });

  it('preserves the original trigger when close and reopen are batched', async () => {
    await open();
    modal.open = false;
    modal.open = true;
    await modal.updateComplete;
    await close();
    expect(document.activeElement).toBe(first);
  });

  it('restores focus to a trigger inside a shadow root', async () => {
    const host = document.createElement('div');
    const root = host.attachShadow({ mode: 'open' });
    const trigger = document.createElement('button');
    trigger.textContent = 'Shadow trigger';
    root.append(trigger);
    fixture.append(host);
    await open(trigger);
    await close();
    expect(root.activeElement).toBe(trigger);
  });

  it.each(['removed', 'hidden', 'disabled', 'inert'] as const)(
    'falls back naturally when the trigger is %s',
    async (state) => {
      await open();
      if (state === 'removed') first.remove();
      else first[state] = true;
      await close();
      expect(document.activeElement).toBe(document.body);
    }
  );

  it('ignores Escape while closed without restoring stale focus', async () => {
    await open();
    await close();
    second.focus();
    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
      cancelable: true,
    });
    window.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(false);
    expect(document.activeElement).toBe(second);
  });

  it('does not restore trigger focus during result navigation', async () => {
    const form = await open();
    const focus = vi.spyOn(first, 'focus');
    const originalUrl = location.href;
    const originalHistory = localStorage.getItem(HISTORY_KEY);
    try {
      form.handleOpenLink({
        id: 'focus-test',
        title: 'Test result',
        content: '',
        metadataName: 'focus-test',
        ownerName: 'admin',
        type: 'post',
        permalink: '#focus-test-result',
      });
      await form.updateComplete;
      expect(location.hash).toBe('#focus-test-result');
      expect(modal.open).toBe(true);
      expect(focus).not.toHaveBeenCalled();
    } finally {
      history.replaceState(null, '', originalUrl);
      if (originalHistory === null) localStorage.removeItem(HISTORY_KEY);
      else localStorage.setItem(HISTORY_KEY, originalHistory);
    }
  });
});
