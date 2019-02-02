<template>
	<div id="bbs" class="common_contents_wrap">
		<h2>BBS</h2>
		<p class="">
			キリ番報告はこちらから♪<br />
			他にも管理人ＡＲＡＩへのご意見・ご要望など自由にカキコしてください( ´∀｀)<br />
			以下のような荒らしは<span class="force_color">！！絶対禁止！！</span>です。<br />
			<ul>
				<li>・下ネタや誹謗・中傷ネタの投稿</li>
				<li>・「○○するだけでお金がもらえる」のような書き込み</li>
				<li>・マナーの悪い書き込み</li>
				<li>・その他管理人が不適切と判断した記事の投稿</li>
			</ul>
		</p>

		<!-- 投稿フォーム -->
		<div class="bbs_form_wrap">
			<div class="bbs_form">
				<form @submit.prevent="postBBS">
					<p>
						<label for="name">名前</label>
						<input id="name" type="text" name="" v-model="inputName" />					
					</p>
					<p>
						<label for="title">件名</label>
						<input id="title" type="text" name="" v-model="inputTitle" />
					</p>
					<p>
						<label for="message">本文</label>
						<span class="force_color"></span>
						<textarea id="message" name="" required v-model="inputMessage"></textarea>
					</p>
					<p>
						<input type="submit" value="カキコ" />
						<input type="reset" value="リセット" />
					</p>
				</form>
			</div>
		</div>

		<!-- 掲示板フォーム -->
		<ul class="post_list">
			<li class="post_wrap" v-for="(postItem, postKey) in postList">
				<div class="post_countets">
					<h4>
						<span>{{ postKey + 1 }}:</span>
						{{ postItem.title }}
					</h4>
					<p class="bbs_txt">{{ postItem.message }}</p>
					<div class="bbs_detail">
						<p>
							<span>投稿者：{{ postItem.name }}</span>
							<span>投稿日：{{ postItem.date }}</span>
						</p>
					</div>
				</div>
			</li>			
		</ul>
	</div>
</template>

<script>
import db from '../src/js/firebase-init'

export default {
    data () {
        return {
            banner_image_src: require("../src/img/my_site_banner.png"),
            postList: [],
            inputName: "",
            inputTitle: "",
            inputMessage: ""

        }
    },
	mounted() {
		// db setting
		db.settings({ timestampsInSnapshots: true })
		const self = this
		db.collection("bbs").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				let getData = {
					'name': doc.data().name,
					'title': doc.data().title,
					'message': doc.data().message,
					'date': doc.data().date
				}
				self.postList.push(getData)
			})
		})
	},
	methods: {
		postBBS() {
			if (this.inputName == '') {
				this.inputName == '通りすがりの名無しさん'
			}

			const now = new Date()
			let formatDate = now.getFullYear() +'-'+ ('0' + (now.getMonth() + 1)).slice(-2) +'-'+ ('0' + now.getDate()).slice(-2) +' '+ now.getHours() +':'+ now.getMinutes() +':'+ now.getSeconds()
			let setNewPost = {
				name: this.inputName,
				title: this.inputTitle,
				message: this.inputMessage,
				date: formatDate
			}

			db.collection("bbs").add(setNewPost).catch(function(err) {
				alert("投稿に失敗しました。しばらく時間をおいてから再度お試しください")
			});

			this.postList.push(setNewPost)

			this.inputName = ""
            this.inputTitle = ""
            this.inputMessage = ""
		}
	}
}
</script>