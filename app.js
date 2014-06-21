$(function() {
	lastPost();
	nextPost();
	// console.log(allPosts[1].tumblr);
});

var allPosts = [];

var post1 = {
	info: 'You Were Sweet ( <strong>Language</strong> Retouch ) / I  You  Were - Donal Picke 2012 - Video Princess: <strong>VATO</strong> - Pickup: N. Summerville',
	video: 'https://www.youtube.com/embed/K9yDYLQS7HE?controls=0&rel=0&showinfo=0',
	tumblr: 'http://www.tumblr.com/reblog/6972461296/qRNC7is4?redirect_to=%2Fblog%2Flucidolason',
	soundcloud: 'https://soundcloud.com/l-a/i-were-sweet-missis'
};

var post2 = {
	info: 'Badmitten / I Thought Sweet (© L. Pickle 2012) Vocal and instrumentation - L. Elri, Percussion - Hari Bingo; Mixing - Chris Para / L. Bornagain ',
	video: 'https://www.youtube.com/embed/V5Vh9nj_yN4?controls=0&rel=0&showinfo=0',
	tumblr: 'http://www.tumblr.com/reblog/6865104226/vbwWEnL0?redirect_to=%2Fblog%2Flucidolason',
	soundcloud: 'https://soundcloud.com/l-/hand'
};

var post3 = {
	info: 'BadmXxxxxxxxx  xxxxx xxx Sweet (© Ltttttttttttttttttation - Lttttttti, Percussion - Hari Bingo; Mixing - Chris Para / L. Bornagain ',
	video: 'https://www.youtube.com/embed/TCt6UbJNvT0?controls=0&rel=0&showinfo=0',
	tumblr: 'http://www.tumblr.com/reblog/6865104226/vbwWEnL0?redirect_to=%2Fblog%2Flucidolason',
	soundcloud: 'https://soundcloud.com/l-/hand'
};

allPosts.push(post1);
allPosts.push(post2);
allPosts.push(post3);

var i = 0;

var lastPost = function() {
    $('.arrow-left').click(function(e) {
        e.preventDefault();
        $('.text').html(allPosts[i].info);
        $('iframe').attr('src', allPosts[i].video);
        $('#tumblr a').attr('href', allPosts[i].tumblr);
        $('#soundcloud a').attr('href', allPosts[i].soundcloud);
        i = (i + 1) % allPosts.length;
    });
};

var nextPost = function() {
	$('.right').click(function(e) {
		e.preventDefault();
		console.log('hii');
        $('.text').html(allPosts[i].info);
        $('iframe').attr('src', allPosts[i].video);
        $('#tumblr a').attr('href', allPosts[i].tumblr);
        $('#soundcloud a').attr('href', allPosts[i].soundcloud);
        i = (i + 1) % allPosts.length;
    });
};