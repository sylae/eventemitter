
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:CharlotteDunois" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="CharlotteDunois.html">CharlotteDunois</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:CharlotteDunois_Events" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="CharlotteDunois/Events.html">Events</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:CharlotteDunois_Events_EventEmitter" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Events/EventEmitter.html">EventEmitter</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Events_EventEmitterErrorTrait" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Events/EventEmitterErrorTrait.html">EventEmitterErrorTrait</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Events_EventEmitterInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Events/EventEmitterInterface.html">EventEmitterInterface</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Events_EventEmitterTrait" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Events/EventEmitterTrait.html">EventEmitterTrait</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Events_UnhandledErrorException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Events/UnhandledErrorException.html">UnhandledErrorException</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "CharlotteDunois.html", "name": "CharlotteDunois", "doc": "Namespace CharlotteDunois"},{"type": "Namespace", "link": "CharlotteDunois/Events.html", "name": "CharlotteDunois\\Events", "doc": "Namespace CharlotteDunois\\Events"},
            {"type": "Interface", "fromName": "CharlotteDunois\\Events", "fromLink": "CharlotteDunois/Events.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html", "name": "CharlotteDunois\\Events\\EventEmitterInterface", "doc": "&quot;The event emitter interface.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_on", "name": "CharlotteDunois\\Events\\EventEmitterInterface::on", "doc": "&quot;Attach a listener to an event.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_once", "name": "CharlotteDunois\\Events\\EventEmitterInterface::once", "doc": "&quot;Attach a listener to an event, for exactly once.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_removeListener", "name": "CharlotteDunois\\Events\\EventEmitterInterface::removeListener", "doc": "&quot;Remove specified listener from an event.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_removeAllListeners", "name": "CharlotteDunois\\Events\\EventEmitterInterface::removeAllListeners", "doc": "&quot;Remove all listeners from an event (or all listeners).&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_listeners", "name": "CharlotteDunois\\Events\\EventEmitterInterface::listeners", "doc": "&quot;Get listeners for a specific events, or all listeners.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_emit", "name": "CharlotteDunois\\Events\\EventEmitterInterface::emit", "doc": "&quot;Emits an event, catching all exceptions and emitting an error event for these exceptions.&quot;"},
            
            
            {"type": "Class", "fromName": "CharlotteDunois\\Events", "fromLink": "CharlotteDunois/Events.html", "link": "CharlotteDunois/Events/EventEmitter.html", "name": "CharlotteDunois\\Events\\EventEmitter", "doc": "&quot;Our Event Emitter, equivalent to Node.js&#039; Event Emitter.&quot;"},
                    
            {"type": "Trait", "fromName": "CharlotteDunois\\Events", "fromLink": "CharlotteDunois/Events.html", "link": "CharlotteDunois/Events/EventEmitterErrorTrait.html", "name": "CharlotteDunois\\Events\\EventEmitterErrorTrait", "doc": "&quot;Our Event Emitter Error Trait. This one throws an exception if there is not an error event listener when an error event gets emitted.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterErrorTrait", "fromLink": "CharlotteDunois/Events/EventEmitterErrorTrait.html", "link": "CharlotteDunois/Events/EventEmitterErrorTrait.html#method_emit", "name": "CharlotteDunois\\Events\\EventEmitterErrorTrait::emit", "doc": "&quot;Emits an event, catching all exceptions and emitting an error event for these exceptions.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Events", "fromLink": "CharlotteDunois/Events.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html", "name": "CharlotteDunois\\Events\\EventEmitterInterface", "doc": "&quot;The event emitter interface.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_on", "name": "CharlotteDunois\\Events\\EventEmitterInterface::on", "doc": "&quot;Attach a listener to an event.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_once", "name": "CharlotteDunois\\Events\\EventEmitterInterface::once", "doc": "&quot;Attach a listener to an event, for exactly once.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_removeListener", "name": "CharlotteDunois\\Events\\EventEmitterInterface::removeListener", "doc": "&quot;Remove specified listener from an event.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_removeAllListeners", "name": "CharlotteDunois\\Events\\EventEmitterInterface::removeAllListeners", "doc": "&quot;Remove all listeners from an event (or all listeners).&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_listeners", "name": "CharlotteDunois\\Events\\EventEmitterInterface::listeners", "doc": "&quot;Get listeners for a specific events, or all listeners.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterInterface", "fromLink": "CharlotteDunois/Events/EventEmitterInterface.html", "link": "CharlotteDunois/Events/EventEmitterInterface.html#method_emit", "name": "CharlotteDunois\\Events\\EventEmitterInterface::emit", "doc": "&quot;Emits an event, catching all exceptions and emitting an error event for these exceptions.&quot;"},
            
            {"type": "Trait", "fromName": "CharlotteDunois\\Events", "fromLink": "CharlotteDunois/Events.html", "link": "CharlotteDunois/Events/EventEmitterTrait.html", "name": "CharlotteDunois\\Events\\EventEmitterTrait", "doc": "&quot;Our Event Emitter Trait.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterTrait", "fromLink": "CharlotteDunois/Events/EventEmitterTrait.html", "link": "CharlotteDunois/Events/EventEmitterTrait.html#method_on", "name": "CharlotteDunois\\Events\\EventEmitterTrait::on", "doc": "&quot;Attach a listener to an event.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterTrait", "fromLink": "CharlotteDunois/Events/EventEmitterTrait.html", "link": "CharlotteDunois/Events/EventEmitterTrait.html#method_once", "name": "CharlotteDunois\\Events\\EventEmitterTrait::once", "doc": "&quot;Attach a listener to an event, for exactly once.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterTrait", "fromLink": "CharlotteDunois/Events/EventEmitterTrait.html", "link": "CharlotteDunois/Events/EventEmitterTrait.html#method_removeListener", "name": "CharlotteDunois\\Events\\EventEmitterTrait::removeListener", "doc": "&quot;Remove specified listener from an event.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterTrait", "fromLink": "CharlotteDunois/Events/EventEmitterTrait.html", "link": "CharlotteDunois/Events/EventEmitterTrait.html#method_removeAllListeners", "name": "CharlotteDunois\\Events\\EventEmitterTrait::removeAllListeners", "doc": "&quot;Remove all listeners from an event (or all listeners).&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterTrait", "fromLink": "CharlotteDunois/Events/EventEmitterTrait.html", "link": "CharlotteDunois/Events/EventEmitterTrait.html#method_listeners", "name": "CharlotteDunois\\Events\\EventEmitterTrait::listeners", "doc": "&quot;Get listeners for a specific events, or all listeners.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Events\\EventEmitterTrait", "fromLink": "CharlotteDunois/Events/EventEmitterTrait.html", "link": "CharlotteDunois/Events/EventEmitterTrait.html#method_emit", "name": "CharlotteDunois\\Events\\EventEmitterTrait::emit", "doc": "&quot;Emits an event, catching all exceptions and emitting an error event for these exceptions.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Events", "fromLink": "CharlotteDunois/Events.html", "link": "CharlotteDunois/Events/UnhandledErrorException.html", "name": "CharlotteDunois\\Events\\UnhandledErrorException", "doc": "&quot;Thrown when an error event gets emitted, but not handled (aka no listeners).&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


