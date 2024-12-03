"use client";
import React, { useState } from "react";

const GitHubUserSearch = () => {
  const [username, setUsername] = useState(""); // 検索するユーザー名
  const [userData, setUserData] = useState(null); // 取得したユーザーデータ
  const [error, setError] = useState(null); // エラー情報

  const fetchUserData = async () => {
    try {
      setError(null); // エラーをクリア
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("ユーザーが見つかりません");
      }
      const result = await response.json();
      setUserData(result); // データを保存
    } catch (error) {
      setError(error.message);
      setUserData(null); // ユーザーデータをクリア
    }
  };

  return (
    <div>
      <h1>GitHub ユーザー検索</h1>
      <input
        type="text"
        placeholder="GitHubユーザー名を入力"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUserData}>検索</button>

      {error && <p>エラー: {error}</p>}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>フォロワー: {userData.followers}</p>
          <p>リポジトリ: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubUserSearch;