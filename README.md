# passwordStrength plug-in for jQuery 1.1.0

簡單的密碼強度檢測插件。可通過API修改或添加強度判斷規則。

## DEMO

[示例](http://henrie.pursuitus.com/adminTemplate/index.html)


## 使用

```html
<script src="vendor/jquery.min.js"></script>
<script src="js/passwordStrength.js"></script>

<div class="password-box">
  <input id="newPassword" type="password">
  <div class="password-progress">
    <div class="progress-bar" style="width: 0%;"></div>
  </div>
</div>
```

引入js文件並佈置好輸入框和強度條。

```js
var obj = $(element).passwordStrength();
```

為輸入框綁定passwordStrength()，並返回實例。

數字、大寫字母、小寫、特殊字符、長度12位，每符合一種情況，強度上升一級。
單一字符重複，強度下降一級。

## API

```js
var rules = {
    uppercase: {
        rule: /[A-Z]+/,
        method: true
    }
}

$.tester.addRules(rules);
```

增加強度規則，需在創建實例前添加。


```js
obj.reset();
```

重置輸入框和強度條。


## 聯繫與討論

QQ：3088680950

如果發現八阿哥了或者有功能上的建議，推薦通過 `issue` 發起討論。


## License

[MIT license](https://opensource.org/licenses/MIT). 有好的想法歡迎提供。

隨意使用，轉載請註明出處。
