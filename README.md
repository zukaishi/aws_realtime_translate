# aws_realtime_translate
https://aws.amazon.com/jp/blogs/news/build-your-own-real-time-voice-translator-application-with-aws-services/

# command 
aws translate translate-text --source-language-code "en" --target-language-code "ja" --text "hello, world"s

## architecture
- コマンドを定期実行、アウトプットファイルに出力する↑ただし、インプットファイルの更新時間がアウトプットより過去なら実行しない
- インプットファイルに入るルートは２つ
1. ブラウザ上から入力する
2. ブラウザ上で文字列を選択する