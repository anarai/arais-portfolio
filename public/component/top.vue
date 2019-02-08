
<template>
	<div id="top">
		<!-- タイトル＆キリ番 -->
		<section class="ttl_area">
			<p class="since_txt">
				ＬＡＳＴ　ＵＰＤＡＴＥ: ２０１９／２／８<br />
				ＳＩＮＣＥ: ２０１８／１２／１
			</p>

			<h1 class="smoothing_off">ARAI'S PORTFOLIO</h1>
      <img :src="ichigo_gif_src" width="65" height="auto" alt="ICHIGODAIHUKU">

			<p class="ttl_note">
				ようこそ♪<br />
				このホームページは管理人	ＡＲＡＩのポートフォリオです。<br />
				荒らし＆キリ番踏み逃げは禁止です!!<br />
				ゆっくりしていってください<img :src="yaan_gif_src" width="auto" height="24" alt="YAAN">

			</p>
			<!-- キリ番 -->
			<p class="access_counter">{{ countList.total }}</p>
		</section>

		<div class="marquee_area">
			<p class="marquee_txt">♪♪♪こんにちは!!あなたは本日{{ countList.daily }}人名のお客様です♪♪♪</p>
		</div>

		<p class="kiriban_notation">
			キリ番踏んだ方は必ず<a href="./bbs">「ＢＢＳ」</a>にカキコお願いします!<span class="force_color toggle_disp">踏み逃げ禁止!!</span>
		</p>

		<p class="news_text">
      ２０１９／２／８ 更新：リンク集更新しました☆
      <img :src="new_gif_src" width="auto" height="11" alt="NEW">
    </p>

		<div class="top_img_area">
			<div class="ginziro_img">
				<img :src="main_image_src" width="300" height="auto" alt="GINZIROU">
			</div>
      <div class="hukidashi_jp_only">
        <p>
          Ｓｏｒｒｙ。。。<br />
          Ｔｈｉｓ Ｈｏｍｅｐａｇｅ ｉｓ<br />
          Ｊａｐａｎｅｓｅ　Ｏｎｌｙ. 
        </p>
      </div>
      <div class="hukidashi_about">
        <p>
          実家で飼ってるパピヨン♪<br />
          名前は<span class="rainbow">『銀次郎』</span>です★
        </p>
      </div>
		</div>

		<!-- 各コンテンツ概要 -->
		<table class="common_table">
			<tbody>
				<tr>
					<td>ＴＯＰ</td>
					<td>このページです！</td>
				</tr>
				<tr>
					<td>ＡＢＯＵＴ</td>
					<td>このホームページの概要、注意事項についてです！始めた来た人は必読！</td>
				</tr>
				<tr>
					<td>ＰＲＯＦＩＬＥ</td>
					<td>管理人ＡＲＡＩのプロフィールです♪ポートフォリオらしくスキルも掲載してます♪</td>
				</tr>
<!--				 <tr>
					<td>ＷＯＲＫＳ</td>
					<td><span class="force_color">！！現在工事中！！</span>今まで作成したもの置き場です！</td>
				</tr> -->
				<tr>
					<td>ＢＢＳ</td>
					<td>キリ番踏んだ方はコチラへ報告をお願いします<img :src="new_gif_src" width="auto" height="11" alt="NEW"></td>
				</tr>
				<tr>
					<td>ＬＩＮＫＳ</td>
					<td>リンク集です。相互リンク常時募集しております♪<img :src="new_gif_src" width="auto" height="11" alt="NEW"></td>
				</tr>
				<tr>
					<td>ＣＯＮＴＡＣＴ</td>
					<td>管理人ＡＲＡＩへの連絡はコチラから！荒らしメール絶対やめてください！！</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import db from '../src/js/firebase-init'
import Cookies from 'js-cookie'

export default {
	data () {
		return {
			countList: [],
			main_image_src: require("../src/img/top_ginziro.jpg"),
      ichigo_gif_src: require("../src/img/ichigodaifuku.gif"),
      yaan_gif_src: require("../src/img/yaa-n.gif"),
      new_gif_src: require("../src/img/new.gif")
		}
	},
	mounted() {
		const self = this

		// db setting
		db.settings({ timestampsInSnapshots: true })
		let docRef = db.collection("access_counter").doc("82D65Bz0pmlezvlhpmH5");

		let getDataPromise = new Promise(function(resolve, reject) {

			docRef.get().then(function(doc) {
				if (doc.exists) {
					let countList = {
						total: doc.data().total,
						daily: doc.data().daily,
						latestDate: doc.data().latestDate
					}

					resolve(countList);
				}
			}).catch(function(error) {
				reject(error);
			});

		});

		getDataPromise.then(function(countList) {
			const now = new Date()
			let formatDate = now.getFullYear() +'-'+ ('0' + (now.getMonth() + 1)).slice(-2) +'-'+ ('0' + now.getDate()).slice(-2)
			let cookie = Cookies.get("todayAccessDate")

			if (countList.latestDate != formatDate) {
				// today first db access
				let yesterdayTotal = countList.total + countList.daily

				countList = {
					total: yesterdayTotal,
					daily: 1,
					latestDate: formatDate
				}

				// counter update
				docRef.update(countList).then(function (docRef) {
				}).catch(function (error) {
					console.error('Error adding document: ', error);
					// disp counter
					self.countList = self.setDummyCounter()
				});

			} else if (!cookie) {
				// today first user access
				Cookies.set("todayAccessDate", now, { expires: 1 });
				countList.daily++

				// counter update
				docRef.update(countList).then(function (docRef) {
				}).catch(function (error) {
					console.error('Error adding document: ', error);
					// disp counter
					self.countList = self.setDummyCounter()
				});

			}

			// disp counter
			self.countList = self.formatCounter(countList)

		}).catch(function (error) {
			console.log("Error getting document:", error);
			// disp counter
			self.countList = self.setDummyCounter()
		});

	},
	methods: {
		formatCounter(countList) {
			// アクセスカウンター用データの整形
			let includedTodayTotal = countList.total + countList.daily
			countList.total =	('0000000000' + includedTodayTotal).slice(-10)
			return countList
		},
		setDummyCounter() {
			// エラー時に表示するダミーアクセスカウンター
			let dummyCountList = {
				total: 9999999998,
				daily: 1
			}
			// disp counter
			return this.formatCounter(dummyCountList)			
		}
	}
}
</script>