// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac

var proxy = "PROXY 104.155.206.156:25;";

var domains = {
	"google.com":	1,
	"googlevideo.com":	1,
	"blogspot.com":	1,
	"4shared.com":	1, 
	"twitter.com":	1,
	"dropbox.com":	1, 
	"facebook.com":	1, 
	"github.com":	1,
	"github.io":	1,
	"bbcchinese.com":	1, 
	"s3.amazonaws.com":	1,
	"raw.githubusercontent.com":	1,
 	"bbc.com":	1,
 	"chinadigitaltimes.net":	1,
	"gmail.com":	1,
	"live.com":	1,
	"dropboxusercontent.com":	1,
	"aisex.com":	1,
	"t66y.com":	1,
	"google.co.jp":	1,
	"wikipedia.org":	1,
	"thepiratebay.cd":	1,
	"tokyo-tosho.net":	1,
	"tokyo-hot.com":	1,
	"twimg.com":	1,
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
