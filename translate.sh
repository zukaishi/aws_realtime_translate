aws translate translate-text --source-language-code "en" --target-language-code "ja" --text $(printf '%s' $(cat input.txt)) > output.txt