https://api.unsplash.com/search/photos?query=rain&client_id=n-Mbim4tzmenTZYgEXI7p8y0-XLnX-ItwFCLhh-lOaw
Access Key = n-Mbim4tzmenTZYgEXI7p8y0-XLnX-ItwFCLhh-lOaw


fetch(" ")の戻り値はPromise。
await fetch(" ")の戻り値はResponseオブジェクト。参考: https://kde.hateblo.jp/entry/2018/10/22/010811
    
json() は Response インターフェイスのメソッド。
○○○.json()だとPromiseを返す。
await ○○○.json()だとJSONデータを返す。

２つのプロパティ [[PromiseState]] と [[PromiseResult]] は、コードからは直接アクセスすることはできない、JavaScript エンジンが内部でのみ使用するプロパティとなっている。
参考: https://hidekazu-blog.com/javascript-promise/