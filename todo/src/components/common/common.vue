<template>
		<div class="pohoto-bottom">
		 	<ul>
		 		<li class="photo-comment">
		 			<div>
		 				<span>提交评论</span>
		 				<span><a @click="goback">返回</a></span>
		 			</div>
		 		</li>
		 		<li class="text-comment">
		 			<textarea v-model='msg'></textarea>
		 		</li>
		 		<mt-button type="primary" @click="sendComment" size="large">发表评论</mt-button>
		 		<li class="photo-comment">
		 			<div>
		 				<span>发表评论</span>
		 				<span>44条评论</span>
		 			</div>
		 		</li>
		 	</ul>
		 	<ul class="comment-list">
		 		<li v-for="(comment,index) in comments" :key='index'>{{comment.user_name}}：{{comment.content}} {{comment.add_time}}</li>
		 	</ul>
		 	<mt-button type="danger" @click="loadByPage" size="large">点击加载更多</mt-button>
		 </div>  
</template>
<script>
	export default{
		data(){
          return{
          	comments:[],
               pageindex:1,
               msg:'',
          }
		},
		created(){
            

		this.loadFirst()
		},
		props:['cid'],
		methods: {
         goback(){
         	this.$router.go(-1);
         },
         loadFirst(){
          		this.$axios.get('getcomments/'+this.cid+'/1')
          		.then(res=>{
          			this.comments=res.data.message;

          		})
          	},
         loadByPage(){
             this.$axios.get('getcomments/'+this.cid+'/'+(++this.pageindex))
             //和this.pageindex++有区别
          		.then(res=>{
          			this.comments=this.comments.concat(res.data.message);

          		})
         },
         sendComment(){

         	console.info(this.msg);
         	this.$axios.post('getcomments/'+this.cid,'content:'+this.msg,{
    	emulateJSON:true
    })
         	.then(res=>{
         		this.loadFirst();
         	})
         } 	
       }
	}
</script>
<style scoped>
	.photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
   }

	.photo-comment > div span:nth-child(2) {
	    float: right;
	}

	.photo-comment {
	    height: 30px;
	    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
	    line-height: 30px;
	    margin-bottom: 5px;
	}

	.txt-comment {
	    padding: 5 5;
	}

	.txt-comment textarea {
	    margin-bottom: 5px;
	}

	.comment-list li {
	    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	    padding-bottom: 5px;
	    margin-bottom: 5px;
	    padding-left: 5px;
	}

	li {
	    list-style: none;
	}

	ul {
	    margin: 0;
	    padding: 0;
	}	
</style>