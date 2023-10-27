package run.halo.search.widget;

import org.springframework.stereotype.Component;
import org.thymeleaf.context.ITemplateContext;
import org.thymeleaf.model.IModel;
import org.thymeleaf.model.IModelFactory;
import org.thymeleaf.processor.element.IElementModelStructureHandler;
import reactor.core.publisher.Mono;
import run.halo.app.theme.dialect.TemplateHeadProcessor;

@Component
public class SearchWidgetHeadProcessor implements TemplateHeadProcessor {

    public SearchWidgetHeadProcessor() {
    }

    @Override
    public Mono<Void> process(ITemplateContext context, IModel model,
                              IElementModelStructureHandler structureHandler) {
        final IModelFactory modelFactory = context.getModelFactory();
        model.add(modelFactory.createText(searchWidgetScript()));
        return Mono.empty();
    }

    private String searchWidgetScript() {
        return """
                <!-- PluginSearchWidget start -->
                <script src="/plugins/PluginSearchWidget/assets/static/search-widget.iife.js" async></script>
                <link rel="stylesheet" href="/plugins/PluginSearchWidget/assets/static/style.css" />
                <!-- PluginSearchWidget end -->
                """;
    }
}
