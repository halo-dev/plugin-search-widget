package run.halo.search.widget;

import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.*;
import reactor.core.publisher.Mono;
import run.halo.app.search.SearchOption;
import run.halo.app.search.SearchResult;
import run.halo.app.search.SearchService;

import java.util.List;
import java.util.Map;

@Component
public class SearchView {

    private final SearchService searchService;

    public SearchView(SearchService searchService) {
        this.searchService = searchService;
    }

    @Bean
    RouterFunction<ServerResponse> searchView() {
        return RouterFunctions.route()
                .GET("/search", RequestPredicates.accept(MediaType.TEXT_HTML), this::performSearch)
                .build();
    }

    private Mono<ServerResponse> performSearch(ServerRequest serverRequest) {
        int limit = serverRequest.queryParam("limit")
                .map(Integer::parseInt)
                .orElse(10);
        var keyword = serverRequest.queryParam("keyword").orElse("");
        Mono<SearchResult> result;
        if (keyword.isBlank()) {
            var searchResult = new SearchResult();
            searchResult.setTotal(0L);
            searchResult.setLimit(limit);
            searchResult.setProcessingTimeMillis(0);
            searchResult.setHits(List.of());
            result = Mono.just(searchResult);
        } else {
            var includeTypes = serverRequest.queryParams().get("includeTypes");
            var option = new SearchOption();
            option.setKeyword(keyword);
            option.setLimit(limit);
            option.setFilterExposed(true);
            option.setFilterPublished(true);
            option.setFilterRecycled(false);
            option.setIncludeTypes(includeTypes);
            result = searchService.search(option);
        }
        return ServerResponse.ok().render("search", Map.of(
                "searchResult", result
        ));
    }
}
