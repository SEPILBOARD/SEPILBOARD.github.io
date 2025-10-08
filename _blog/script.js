// 블로그 이름 클릭 시 메인 페이지로 이동
document.getElementById("blogName").addEventListener("click", () => {
    window.location.href = "index.html";
});
  
// 카테고리 버튼 데이터
const categories = [
    { name: "Dev", url: "dev/index.html" },
    { name: "PS", url: "ps/index.html" },
    { name: "CS", url: "cs/index.html" },
];
  
// 글 데이터 (나중에 JSON 등으로 바꿀 수도 있음)
const posts = [
    { title: "세필" },
    { title: "이터리" },
    { title: "싸이썬" },
    { title: "우끼끼" },
];
  
// 카테고리 버튼 생성
const categoryTemplate = document.getElementById("categoryTemplate");
const categoryContainer = document.getElementById("categoryContainer");
  
categories.forEach(cat => {
    const clone = categoryTemplate.content.cloneNode(true);
    const btn = clone.querySelector("button");
    btn.textContent = cat.name;
    btn.addEventListener("click", () => {
      window.location.href = cat.url;
    });
    categoryContainer.appendChild(clone);
});
  
// 글 목록 생성
const postTemplate = document.getElementById("postTemplate");
const postList = document.getElementById("postList");
  
posts.forEach(post => {
    const clone = postTemplate.content.cloneNode(true);
    const div = clone.querySelector(".post");
    div.textContent = post.title;
    postList.appendChild(clone);
});
  
  