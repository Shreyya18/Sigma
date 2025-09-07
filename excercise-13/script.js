function createCard(title, cName, views, monthsOld, duration, thumbNail){

    document.querySelector('.container').innerHTML+=
     '<div class="card">'+
            '<div class="image">'+
                '<img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA"  alt="" width="250">'+
                '<span>30:22</span>'+
            '</div>'+
            '<div>'+
                '<p>Sigma Web Dev Video #2</p>'+
               ' <div>'+
                  '  <span>5.8M</span>'+
                    '<span>1 year ago</span>'+
                '</div>'+
            '</div>'+
        '</div>'
}



document.querySelector("button").onclick=function(){
    createCard('Sigma Web Dev Video #2', 'CodeWithHarry', '56K', 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");
}