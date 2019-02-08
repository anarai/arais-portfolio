<template>
	<div id="links" class="common_contents_wrap">
		<h2>LINKS</h2>

		<!-- 各コンテンツ概要 -->
		<table class="common_table">
			<tbody>
				<tr>
					<th>ＳＩＴＥ　ＮＡＭＥ</th>
					<td>ＡＲＡＩ＇Ｓ　ＰＯＲＴＦＯＬＩＯ</td>
				</tr>
				<tr>
					<th>ＳＩＴＥ　ＵＲＬ</th>
					<td>https://arai-portfolio.firebaseapp.com</td>
				</tr>
				<tr>
					<th>ＣＯＭＭＥＮＴ</th>
					<td>管理人ＡＲＡＩのポートフォリオ♪</td>
				</tr>
				<tr>
					<th>ＢＡＮＮＥＲ</th>
					<td><img :src="banner_image_src" height="60" width="auto" alt="ARAI'S PORTFOLIO" /></td>
				</tr>
			</tbody>
		</table>

		<table class="link_table">
			<tbody>
				<tr>
					<th>
						<a href="https://github.com/anarai">
							ＭＹ　ＧｉｔＨｕｂ
						</a>
					</th>
					<td>管理人のＧｉｔＨｕｂアカウント♪このホムペのソースもこちらから♪</td>
				</tr>
				<tr>
					<th>
						<a href="https://alliance7.blogspot.com/">
							ＭＹ　Ｂｌｏｇ
						</a>
					</th>
					<td>
						長時間悩んだ問題について分野問わず書いています★<br />
						このホムペの制作関連記事もあるよ(^_-)ー☆
					</td>
				</tr>
				<tr>
					<th>
						<a href="https://www.google.co.jp/">
							ＧＯＯＧＬＥ
						</a>
					</th>
					<td>現在もっとも使える検索エンジン</td>
				</tr>
				<tr>
					<th>
						<a href="https://www.yahoo.co.jp/">
							ＹＡＨＯＯ！ＪＡＰＡＮ
						</a>
					</th>
					<td>いつもお世話になってます</td>
				</tr>
				<tr>
					<th>
						<a href="http://bluegreen.jp/sozai/bg/texture/index.html">
							フリー素材　blue-green
						</a>
					</th>
					<td>背景画像お借りしました！お世話になってます！</td>
				</tr>
				<tr>
					<th>
						<a href="http://steak-french.net/sozaisyu.htm">
							ヴィラージュ・クッキング素材集
						</a>
					</th>
					<td>gifアニメと、野菜 果物 料理などの食べ物や飲み物のイラスト素材集。<br />gif素材お借りしました！種類が豊富なのでぜひ訪問してみてください♪</td>
				</tr>
				<tr>
					<th>
						<a href="http://abehiroshi.la.coocan.jp/">
							阿部寛のホームページ
						</a>
					</th>
					<td>このホムペを作る時に参考にさせていただいたサイト様♪みんなの憧れ！！</td>
				</tr>
				<tr>
					<th>
						<a href="http://verdy-kun.a-wing.biz/">
							ヴェルディくんのお部屋
						</a>
					</th>
					<td>このホムペを作る時に参考にさせていただいたサイト様♪gifがイケてる！！</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
    data () {
        return {
            banner_image_src: require("../src/img/my_site_banner.png")
        }
    }
}
</script>