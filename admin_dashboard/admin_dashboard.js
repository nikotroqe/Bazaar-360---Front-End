function viewPost(title) {
  alert("Viewing post: " + title);
}

function editPost(title) {
  alert("Editing post: " + title);
}

function deletePost(button) {
  if (confirm("Are you sure you want to delete this post?")) {
    const row = button.closest('tr');
    row.remove();
  }
}
