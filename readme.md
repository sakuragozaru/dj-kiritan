# これは何?

きりたんのEX_VOICEやVoiceroidを素早く操作するためのツールです

# どんなツール?

こんなツール、以下ができる
 - EXボイスクリックしてEXボイス再生
 - マイクに向けて喋ってVoiceroid操作
 - テキスト欄に文字入力してVoiceroid操作

<img src="https://user-images.githubusercontent.com/77018668/126045647-f5017702-4e07-4e26-829e-a8eeef59617e.png" width="800px">


# どうやって使うの?

  1. きりたんのEXボイスをexVOICE内に配置
  1. `npm install -g http-server`
  2. `npm start` で起動
  3. https://127.0.0.1:8080/ にアクセス
  4. EXボイスクリックしてEXボイス再生したり、マイクに向けて喋ってVoiceroid操作したり、テキスト欄に文字入力してVoiceroid操作する

# その他
- 棒読みちゃんとWebsocketプラグインを使っています
Websocketプラグインはこちらを導入してください
https://github.com/chocoa/BouyomiChan-WebSocket-Plugin

- httpsアクセスを許可したいアドレスを増やす場合はcertの再発行をしてください
https://qiita.com/hbjpn/items/925c8012cd93d9165be6
