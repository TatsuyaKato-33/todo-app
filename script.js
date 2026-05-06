document.querySelector('#addBtn').addEventListener('click', (e) => {
    e.preventDefault();
    // 入力値読み込み
    const inputElement = document.querySelector('#taskInput');
    // タスクリスト読み込み
    const ulElement = document.querySelector('#taskList');
    // liタグを作成
    const liElement = document.createElement('li');
    // 入力値をliタグに代入
    liElement.textContent = inputElement.value;
    // liタグをulタグに連結
    ulElement.appendChild(liElement);
});