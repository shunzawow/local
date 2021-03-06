// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac

var proxy = "PROXY 104.155.206.156:25;";

var domains = {
	"aisex.com":	1,
	"allinfa.com":	1,
 	"bbc.com":	1,
	"bbcchinese.com":	1, 
 	"chinadigitaltimes.net":	1,
	"dropboxusercontent.com":	1,
	"discuss.com.hk":	1,
	"facebook.com":	1, 
	"fb.me":	1,
	"google.com":	1,
	"*.google":	1,
	"google-analytics.com":	1,
	"google.co.jp":	1,
	"googlevideo.com":	1,
	"googleusercontent.com":	1,
	"ggpht.com":	1,
	"gstatic.com":	1,
	"letscorp.net":	1,
	"blogspot.com":	1,
	"4shared.com":	1, 
	"dropbox.com":	1, 
	"github.com":	1,
	"github.io":	1,
	"ift.tt":	1,
	"instagram.com":	1,
	"pinext.net":	1,
	"appledaily.com":	1,
	"nextmedia.com":	1,
	"reuters.com":	1,
	"s3.amazonaws.com":	1,
	"sexinsex.net":	1,
	"raw.githubusercontent.com":	1,
	"gmail.com":	1,
	"live.com":	1,
	"t66y.com":	1,
	"t.co":	1,
	"wikipedia.org":	1,
	"thepiratebay.cd":	1,
	"tokyo-tosho.net":	1,
	"tokyo-hot.com":	1,
	"twitter.com":	1,
	"twimg.com":	1,
	"voachinese.com":	1,
	"youtube.com":	1,
	"youtube-nocookie.com":	1,
	"ytimg.com":	1

};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
	var suffix;
	var pos = host.lastIndexOf('.');
	pos = host.lastIndexOf('.', pos - 1);
	while(1) {
		if (pos <= 0) {
			if (hasOwnProperty.call(domains, host)) {
				return proxy;
			} else {
				return direct;
			}
		}
		suffix = host.substring(pos + 1);
		if (hasOwnProperty.call(domains, suffix)) {
			return proxy;
		}
		pos = host.lastIndexOf('.', pos - 1);
	}
}
