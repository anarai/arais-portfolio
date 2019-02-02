<template>
	<div id="contact" class="common_contents_wrap">
		<h2>CONTACT</h2>

		<!-- 送信後表示 -->
		<p v-if="isSubmitComplete">
			お問い合わせありがとうございます。送信完了しました！<br /><br />
			ご入力いただいたメールアドレスにお問い合わせ内容を送信しましたのでご確認ください。自動送信メールが届いていない場合、何らかの理由でメールの送信に失敗している可能性があります。お手数ですが、下記メールアドレスへお問い合わせ内容を送信してください。<br />
			arais.portfolio.contact@gmail.com<br />
		</p>

		<div v-else>
			<!-- 送信前表示 -->
			<p>
				管理人ＡＲＡＩへのコンタクトはこちらから！<br />
			</p>

			<form @submit.prevent="onSubmit">
				<table class="contact_form_table">
					<tbody>
						<tr>
							<th colspan="2">ＣＯＮＴＡＣＴ</th>
						</tr>
						<tr>
							<th>
								<label for="email">Ｅ－ＭＡＩＬ</label>
								<span class="force_color">*</span>
							</th>
							<td>
								<input id="email" type="email" name="entry.1284114612" v-model="email" required />
							</td>
						</tr>
						<tr>
							<th>
								<label for="name">ＮＡＭＥ</label>
								<span class="force_color">*</span>
							</th>
							<td>
								<input id="name" type="text" name="entry.61785260" v-model="name" required />
							</td>
						</tr>
						<tr>
							<th>
								<label for="title">ＴＩＴＬＥ</label>
								<span class="force_color">*</span>
							</th>
							<td>
								<input id="title" type="text" name="entry.1987260132" v-model="title" required />
							</td>
						</tr>
						<tr>
							<th>
								<label for="message">ＭＥＳＳＡＧＥ</label>
								<span class="force_color">*</span>
							</th>
							<td>
								<textarea id="message" name="entry.124930197" v-model="message" required></textarea>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<input type="submit" value="送信" />
								<input type="reset" value="リセット" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>			
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data () {
		return {
			isSubmitComplete: false,
			email: '',
			name: '',
			title: '',
			message: ''
		}
	},
	methods: {
		onSubmit: function () {

			const submitParams = new FormData()
			submitParams.append("entry.1645196224", this.email);
			submitParams.append("entry.337418058", this.name);
			submitParams.append("entry.1576306354", this.title);
			submitParams.append("entry.2119727395", this.message);

			const CORS_PROXY = 'https://cors-escape.herokuapp.com/'
			const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdYPCMYSF10huJquc0x0vHw5sNoGX2ljuYTh8kLPSIYq05gjg/formResponse'

			// axios({
			// 	method:'post',
			// 	url:'https://docs.google.com/forms/d/e/1FAIpQLScU1CL-ov0EBK36JZlAp9OVZmipVEnFUIYGf5DbvhOzDbUDwA/formResponse',
			// 	responseType:'json',
			// 	headers: {'Content-Type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*'},
			// 	data: submitParams
			// }).then(function (res) {
			// 	this.isSubmitComplete = true
			// }).catch(
			// 	error => console.log(error)
			// )

			// ajax
			axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams).then(res => {
				this.isSubmitComplete = true
			}).catch(
				this.isSubmitComplete = true
			)
		}
	}
}
</script>