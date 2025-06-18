var posts=["2025/06/18/hello-world/","2025/06/18/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };