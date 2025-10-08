// 검색 기능
document.getElementById("searchInput").addEventListener("keyup", function () {
    let keyword = this.value.toLowerCase();
    let posts = document.querySelectorAll("#postList .post");
  
    posts.forEach(post => {
      let text = post.textContent.toLowerCase();
      post.style.display = text.includes(keyword) ? "block" : "none";
    });
});