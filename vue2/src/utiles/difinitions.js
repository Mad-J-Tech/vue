//選択肢の配列の作成
const yearList = [];
const monthList = [];
const dateList = [];

//yearListに和暦を追加
for (let i = 1920; i <= 2021; i++) {
    const jisformatYear = new Date(i, 0);
    const options = { era: "long" };
    const japaneseImperialYear = Intl.DateTimeFormat("ja-JP-u-ca-japanese", options)
        .format(jisformatYear)
        .slice(0, -5);
    yearList.push(`${i}年(${japaneseImperialYear})`);
}

//月、日を配列に格納するための関数作成
const optionLoop = (start, end, list) => {
    for (let i = start; i <= end; i++) {
        list.push(i);
    }
}

//月、日を配列に格納
optionLoop(1, 12, monthList);
optionLoop(1, 31, dateList);

//他ファイルで使うためエクスポート
export { yearList, monthList, dateList }