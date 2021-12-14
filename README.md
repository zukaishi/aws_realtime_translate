# aws_realtime_translate
https://aws.amazon.com/jp/blogs/news/build-your-own-real-time-voice-translator-application-with-aws-services/

# command 
aws translate translate-text --source-language-code "en" --target-language-code "ja" --text "hello, world"
aws translate translate-text --source-language-code "en" --target-language-code "ja" --text $(printf '%s' $(cat input.txt)) > output.json

## 定期実行開始
launchctl load  ~/Library/LaunchAgents/translate.plist
## 定期実行停止
launchctl unload  ~/Library/LaunchAgents/translate.plist