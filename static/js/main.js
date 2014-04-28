YUI().use('node', 'event', 'jsonp', 'jsonp-url', function (Y) {
   // Create a simple app to start a google search about 
   // Meschup Item Masterdate with Twitter
   // Source 1: Aras - AML
   // Source 2: https://dev.twitter.com/docs/api/1.1
   
   var url = "https://api.twitter.com/1.1/search/tweets.json?q=WikiMindMap%&max_id=250126199840518145&result_type=mixed&count=4&callback={callback}";

    function handleJSONP(response) {
        // response is a JavaScript object. No parsing necessary
        Y.one("#output").setHTML(response.outputHTML);
    }

    var service = new Y.JSONPRequest(url, handleJSONP);
    service.send();
   
   
});
