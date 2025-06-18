var posts=["2025/06/18/hello-world/","2025/06/18/“博客从0搭建到使用过程”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };