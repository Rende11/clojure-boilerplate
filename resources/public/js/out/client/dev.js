// Compiled by ClojureScript 1.10.439 {}
goog.provide('client.dev');
goog.require('cljs.core');
goog.require('client.core');
goog.require('figwheel.client');
goog.require('re_frisk.core');
goog.require('devtools.core');
devtools.core.install_BANG_.call(null);
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),client.core.main);
re_frisk.core.enable_re_frisk_BANG_.call(null);
client.core.main.call(null);

//# sourceMappingURL=dev.js.map
