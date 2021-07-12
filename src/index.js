const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //押された削除ボタンの親タグ(div)を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

//DOMを生成
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ作成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)タグを生成
  //button(削除)を生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //未完了リストから削除する関数
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //TODO内容のpタグを取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");

    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    //戻るボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    li.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //削除ボタン動作
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  console.log(li);
};

//追加ボタンが押された時
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
