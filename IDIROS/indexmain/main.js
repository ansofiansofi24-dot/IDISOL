const alerts = {
  feed: "[Rosevelt]: ABSOLUTELY NOT.",
  chats: "[Charles]: Terrifying place. Let's not go there juuuuust yet.",
  news: "[Marcus]: disgusting",
  idicalc: "[Simon]: Do not. With regards: Simon."
}

for (const [id, message] of Object.entries(alerts)) {
  const element = document.getElementById(id)
  if (element) {
    element.addEventListener("click", () => alert(message))
  }
}
