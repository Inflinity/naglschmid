(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"horizontalAlign":"left","minWidth":20,"definitions": [{"class":"PanoramaPlayer","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"arrowKeysAction":"translate","aaEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation"},{"partial":false,"thumbnailUrl":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_t.jpg","hfovMax":130,"label":trans('panorama_0FF52F62_05A8_E0FA_4173_830D890CA291.label'),"hfov":360,"vfov":57.93,"frames":[{"thumbnailUrl":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_t.jpg","front":{"class":"ImageResource","levels":[{"height":8704,"width":8704,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":17,"colCount":17},{"height":4608,"width":4608,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":9,"colCount":9},{"height":2560,"width":2560,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":5,"colCount":5},{"height":1536,"width":1536,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3,"colCount":3},{"height":1024,"width":1024,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":2},{"height":512,"width":512,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/5/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":1}]},"right":{"class":"ImageResource","levels":[{"height":8704,"width":8704,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":17,"colCount":17},{"height":4608,"width":4608,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":9,"colCount":9},{"height":2560,"width":2560,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":5,"colCount":5},{"height":1536,"width":1536,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3,"colCount":3},{"height":1024,"width":1024,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":2},{"height":512,"width":512,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/5/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":1}]},"class":"CubicPanoramaFrame","back":{"class":"ImageResource","levels":[{"height":8704,"width":8704,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":17,"colCount":17},{"height":4608,"width":4608,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":9,"colCount":9},{"height":2560,"width":2560,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":5,"colCount":5},{"height":1536,"width":1536,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3,"colCount":3},{"height":1024,"width":1024,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":2},{"height":512,"width":512,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/5/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":1}]},"left":{"class":"ImageResource","levels":[{"height":8704,"width":8704,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":17,"colCount":17},{"height":4608,"width":4608,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":9,"colCount":9},{"height":2560,"width":2560,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":5,"colCount":5},{"height":1536,"width":1536,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3,"colCount":3},{"height":1024,"width":1024,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":2},{"height":512,"width":512,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/5/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":1}]}}],"data":{"label":"Naglschmid - Home"},"overlays":["this.overlay_463816DD_48E7_8065_41A9_488F856B6638","this.overlay_030DD4EB_0EB7_4E87_41A3_2F4A3BE2C562","this.overlay_46716DDE_48EB_8067_41A5_783C803F99E8","this.overlay_0083FFAD_0ECB_7A83_4191_387F22B41131","this.overlay_02BD58AF_0F08_7EDA_4194_198B4A89BC26","this.overlay_22834582_2D89_63D4_41C5_E89333D47AA5","this.overlay_4DD216F5_434E_CE64_41CA_30E7451A251A","this.overlay_43424BB5_4E06_F950_41D0_ADD8EAF6A34B","this.overlay_40A0A523_4E0A_4977_41AD_6C06BCF6EC57","this.overlay_408D4E77_4E06_3BD0_41CF_DCD6FD4EBDD1","this.overlay_40F2E991_4E06_5953_41C9_7A3F7D91CB2A","this.overlay_415AECEF_4E07_D8CF_41A0_C1F7039DE347"],"class":"Panorama","pitch":0,"id":"panorama_0FF52F62_05A8_E0FA_4173_830D890CA291"},{"playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"translationTransitionDuration":1000,"borderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowColor":"#000000","width":"100%","playbackBarHeadShadowBlurRadius":3,"progressBorderColor":"#000000","id":"MainViewer","progressBarBackgroundColor":["#3399FF"],"shadow":false,"playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"toolTipBorderSize":1,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","subtitlesFontColor":"#FFFFFF","playbackBarLeft":0,"toolTipFontWeight":"normal","vrPointerSelectionTime":2000,"toolTipPaddingTop":4,"paddingRight":0,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"toolTipHorizontalAlign":"center","toolTipShadowSpread":0,"progressBackgroundOpacity":1,"surfaceReticleOpacity":0.6,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","progressBorderSize":0,"subtitlesPaddingLeft":5,"progressHeight":10,"toolTipFontStyle":"normal","playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"subtitlesPaddingRight":5,"progressBarBorderRadius":0,"toolTipPaddingRight":6,"toolTipTextShadowBlurRadius":3,"playbackBarHeadHeight":15,"subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadow":true,"transitionMode":"blending","playbackBarHeadBorderRadius":0,"toolTipTextShadowOpacity":0,"toolTipFontFamily":"Arial","vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"playbackBarHeight":10,"toolTipShadowOpacity":1,"subtitlesTextShadowHorizontalLength":1,"height":"100%","playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingTop":0,"progressLeft":0,"doubleClickAction":"toggle_fullscreen","subtitlesEnabled":true,"minWidth":100,"playbackBarOpacity":1,"minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBackgroundColor":"#F6F6F6","toolTipBorderRadius":3,"playbackBarBackgroundOpacity":1,"subtitlesTop":0,"toolTipFontColor":"#606060","toolTipShadowVerticalLength":0,"subtitlesFontSize":"3vmin","paddingBottom":0,"displayTooltipInSurfaceSelection":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadOpacity":1,"vrPointerSelectionColor":"#FF6600","subtitlesPaddingBottom":5,"progressBorderRadius":0,"class":"ViewerArea","subtitlesTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","propagateClick":false,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarProgressOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","playbackBarHeadShadowVerticalLength":0,"toolTipOpacity":1,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","toolTipShadowBlurRadius":3,"subtitlesTextDecoration":"none","toolTipPaddingLeft":6,"playbackBarHeadWidth":6,"subtitlesPaddingTop":5,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0,"transitionDuration":500,"subtitlesGap":0,"subtitlesShadow":false,"subtitlesBackgroundColor":"#000000","playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingBottom":4,"subtitlesOpacity":1,"progressBarBorderSize":0,"borderSize":0,"progressBackgroundColorRatios":[0],"progressRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBottom":5,"displayTooltipInTouchScreens":true,"subtitlesHorizontalAlign":"center","playbackBarBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","progressOpacity":1,"progressBarBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBorderSize":0,"toolTipShadowHorizontalLength":0,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"surfaceReticleColor":"#FFFFFF"},{"video":"this.videores_0A87743E_05BB_E04A_4188_05F1E7B8063F","loop":false,"height":500,"class":"Video","scaleMode":"fit_inside","id":"video_0B744D6F_05AB_E0CA_4196_5E099984E24A","thumbnailUrl":"media/video_0B744D6F_05AB_E0CA_4196_5E099984E24A_t.jpg","width":1000,"chromaSmoothing":0.13,"label":trans('video_0B744D6F_05AB_E0CA_4196_5E099984E24A.label'),"chromaColor":"#324E70","chromaThreshold":0.14,"data":{"label":"glitch_logo"}},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_0B744D6F_05AB_E0CA_4196_5E099984E24A","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_5EF57B21_4E1A_7973_41CC_1A21E8D96F80, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_5EF57B21_4E1A_7973_41CC_1A21E8D96F80, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_5EF57B21_4E1A_7973_41CC_1A21E8D96F80, 0)"}],"id":"playList_5EF57B21_4E1A_7973_41CC_1A21E8D96F80"},{"automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":-113.07,"pitch":0},"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_camera"},{"class":"PlayList","items":[{"camera":"this.panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_camera","media":"this.panorama_0FF52F62_05A8_E0FA_4173_830D890CA291","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"displayPlayOverlay":true,"class":"VideoPlayer","displayPlaybackBar":true,"clickAction":"play_pause","viewerArea":"this.MainViewer","id":"MainViewerVideoPlayer"},{"class":"PlayerMenuItem","label":"Matthias Naglschmid","id":"TDVAuthor"},{"videoVisibleOnStop":false,"useHandCursor":true,"autoplay":true,"hfov":43.05,"vfov":21.84,"enabledInCardboard":true,"loop":true,"class":"VideoPanoramaOverlay","chromaThreshold":0.14,"image":"this.res_467DBE4E_48EE_8067_41A3_B4D4E0E17DD6","pitch":6.62,"id":"overlay_463816DD_48E7_8065_41A9_488F856B6638","distance":50,"yaw":-128.79,"chromaSmoothing":0.13,"cues":[],"chromaColor":"#324E70","video":"this.videores_0A87743E_05BB_E04A_4188_05F1E7B8063F","data":{"hasAudio":false,"label":"Video"}},{"areas":["this.HotspotPanoramaOverlayArea_03A63585_0EB7_4E83_41A3_615E9FB34C95"],"enabledInCardboard":true,"data":{"label":"apogee_web"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-91.76,"hfov":7.05,"vfov":12.48,"verticalAlign":"middle","data":{"label":"apogee_web"},"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","image":"this.res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0","pitch":-2.53,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_030DD4EB_0EB7_4E87_41A3_2F4A3BE2C562"},{"areas":["this.HotspotPanoramaOverlayArea_46710DDE_48EB_8067_41C3_F4D7787A71C0"],"enabledInCardboard":true,"data":{"label":"naglschmid"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_46718DDE_48EB_8067_41D2_357EAE0571CA"],"maps":[],"id":"overlay_46716DDE_48EB_8067_41A5_783C803F99E8"},{"areas":["this.HotspotPanoramaOverlayArea_008A6FC9_0ECB_7A83_41A2_520AC7D3E70D"],"enabledInCardboard":true,"data":{"label":"Welcome"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_00831FAC_0ECB_7A81_418F_A21EA2A8CB7D"],"maps":[],"id":"overlay_0083FFAD_0ECB_7A83_4191_387F22B41131"},{"areas":["this.HotspotPanoramaOverlayArea_02689936_0F08_7FCB_4167_0EBAEEDBFE1D"],"enabledInCardboard":true,"data":{"label":"211010---Flinti_Logo_Original"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-115.36,"hfov":6.85,"vfov":7.95,"verticalAlign":"middle","data":{"label":"211010---Flinti_Logo_Original"},"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","image":"this.res_0117A759_0F08_7246_419D_869732A0D349","pitch":8.13,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_02BD58AF_0F08_7EDA_4194_198B4A89BC26"},{"areas":["this.HotspotPanoramaOverlayArea_2303A5F0_2D89_6333_41A2_0EBD7F16F5B3"],"enabledInCardboard":true,"data":{"label":"ARTIFICiAL_issue_1_2"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-108.71,"hfov":16.85,"vfov":17.31,"verticalAlign":"middle","data":{"label":"ARTIFICiAL_issue_1_2"},"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","image":"this.res_222FDB4F_2D99_276C_41B1_E6B94B609133","pitch":-4.27,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_22834582_2D89_63D4_41C5_E89333D47AA5"},{"areas":["this.HotspotPanoramaOverlayArea_4D52F762_434E_CF9D_418F_C8C3F419A40F"],"enabledInCardboard":true,"data":{"label":"pulsar_web"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-72.06,"hfov":12.5,"vfov":9.81,"verticalAlign":"middle","data":{"label":"pulsar_web"},"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","image":"this.res_4DA12E5C_4343_41A4_419B_F4A16F1A4714","pitch":-2.77,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_4DD216F5_434E_CE64_41CA_30E7451A251A"},{"areas":["this.HotspotPanoramaOverlayArea_43B86C22_4E06_FF71_418F_FA76AC19DA1B"],"enabledInCardboard":true,"data":{"label":"Apogee"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_4336DBB5_4E06_F950_41BB_140EF07F8A95"],"maps":[],"id":"overlay_43424BB5_4E06_F950_41D0_ADD8EAF6A34B"},{"areas":["this.HotspotPanoramaOverlayArea_40A12523_4E0A_4977_41D1_4E261A4E1AC7"],"enabledInCardboard":true,"data":{"label":"Dark White"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_40A19523_4E0A_4977_41C4_0D6FB9C3ED49"],"maps":[],"id":"overlay_40A0A523_4E0A_4977_41AD_6C06BCF6EC57"},{"areas":["this.HotspotPanoramaOverlayArea_408DBE77_4E06_3BD0_41CA_16CB213A35F5"],"enabledInCardboard":true,"data":{"label":"Apogee"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_408D9E77_4E06_3BD0_419D_5C9EB69B7BC1"],"maps":[],"id":"overlay_408D4E77_4E06_3BD0_41CF_DCD6FD4EBDD1"},{"areas":["this.HotspotPanoramaOverlayArea_40A23A1E_4E06_5B50_41D0_5930DF50D362"],"enabledInCardboard":true,"data":{"label":"intermezzo_web"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-53.33,"hfov":7.37,"vfov":10.77,"verticalAlign":"middle","data":{"label":"intermezzo_web"},"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","image":"this.res_5E8A9BFF_4E1A_58CF_41CB_A07F76DA0459","pitch":-2.11,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_40F2E991_4E06_5953_41C9_7A3F7D91CB2A"},{"areas":["this.HotspotPanoramaOverlayArea_415AFCEF_4E07_D8CF_41BA_CAC19DA3069E"],"enabledInCardboard":true,"data":{"label":"Apogee"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_415ADCEF_4E07_D8CF_41BA_1106F18BE490"],"maps":[],"id":"overlay_415AECEF_4E07_D8CF_41A0_C1F7039DE347"},{"height":500,"width":1000,"hasAudio":false,"levels":["this.videolevel_5ED9AA66_4E1A_7BF1_41A4_DFEA952617F0"],"class":"VideoResource","id":"videores_0A87743E_05BB_E04A_4188_05F1E7B8063F"},{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":1000,"height":500,"url":"media/res_467DBE4E_48EE_8067_41A3_B4D4E0E17DD6_0.jpg"}],"id":"res_467DBE4E_48EE_8067_41A3_B4D4E0E17DD6"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_03A63585_0EB7_4E83_41A3_615E9FB34C95"},{"class":"ImageResource","id":"res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0","levels":[{"class":"ImageResourceLevel","width":718,"height":1012,"url":"media/res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_46710DDE_48EB_8067_41C3_F4D7787A71C0"},{"hfov":10.1,"vfov":2.4,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","pitch":2.82,"id":"HotspotPanoramaOverlayTextImage_46718DDE_48EB_8067_41D2_357EAE0571CA","distance":50,"yaw":-121.46,"image":{"class":"ImageResource","levels":["this.imlevel_4649F062_48EE_805E_41D0_A416D1C82C0B"]},"roll":-0.52,"data":{"label":"naglschmid"},"horizontalAlign":"left"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_008A6FC9_0ECB_7A83_41A2_520AC7D3E70D"},{"hfov":14.12,"vfov":2.43,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","pitch":10.92,"id":"HotspotPanoramaOverlayTextImage_00831FAC_0ECB_7A81_418F_A21EA2A8CB7D","distance":50,"yaw":-127.06,"image":{"class":"ImageResource","levels":["this.imlevel_4649F081_48EE_80DD_41C8_68B341019360"]},"roll":-1.63,"data":{"label":"Welcome"},"horizontalAlign":"right"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_02689936_0F08_7FCB_4167_0EBAEEDBFE1D"},{"class":"ImageResource","id":"res_0117A759_0F08_7246_419D_869732A0D349","levels":[{"class":"ImageResourceLevel","width":698,"height":698,"url":"media/res_0117A759_0F08_7246_419D_869732A0D349_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_2303A5F0_2D89_6333_41A2_0EBD7F16F5B3"},{"class":"ImageResource","id":"res_222FDB4F_2D99_276C_41B1_E6B94B609133","levels":[{"class":"ImageResourceLevel","width":1000,"height":1500,"url":"media/res_222FDB4F_2D99_276C_41B1_E6B94B609133_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_4D52F762_434E_CF9D_418F_C8C3F419A40F"},{"class":"ImageResource","id":"res_4DA12E5C_4343_41A4_419B_F4A16F1A4714","levels":[{"class":"ImageResourceLevel","width":707,"height":1000,"url":"media/res_4DA12E5C_4343_41A4_419B_F4A16F1A4714_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_43B86C22_4E06_FF71_418F_FA76AC19DA1B"},{"hfov":16.61,"vfov":3.59,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","pitch":-9.48,"id":"HotspotPanoramaOverlayTextImage_4336DBB5_4E06_F950_41BB_140EF07F8A95","distance":50,"yaw":-52.79,"image":{"class":"ImageResource","levels":["this.imlevel_5EB60EBE_4E1A_5B51_41BE_AC9F9B8BD7E5"]},"data":{"label":"Apogee"},"horizontalAlign":"right"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_40A12523_4E0A_4977_41D1_4E261A4E1AC7"},{"hfov":16.61,"vfov":3.59,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","pitch":-13.57,"id":"HotspotPanoramaOverlayTextImage_40A19523_4E0A_4977_41C4_0D6FB9C3ED49","distance":50,"yaw":-109.34,"image":{"class":"ImageResource","levels":["this.imlevel_5EB64EDD_4E1A_58D3_41C4_577A34F1382E"]},"data":{"label":"Dark White"},"horizontalAlign":"right"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_408DBE77_4E06_3BD0_41CA_16CB213A35F5"},{"hfov":16.61,"vfov":3.59,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","pitch":-9.92,"id":"HotspotPanoramaOverlayTextImage_408D9E77_4E06_3BD0_419D_5C9EB69B7BC1","distance":50,"yaw":-92.83,"image":{"class":"ImageResource","levels":["this.imlevel_5EB86F0C_4E1A_5931_41D1_AFED7F39082D"]},"data":{"label":"Apogee"},"horizontalAlign":"right"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_40A23A1E_4E06_5B50_41D0_5930DF50D362"},{"class":"ImageResource","id":"res_5E8A9BFF_4E1A_58CF_41CB_A07F76DA0459","levels":[{"class":"ImageResourceLevel","width":751,"height":1062,"url":"media/res_5E8A9BFF_4E1A_58CF_41CB_A07F76DA0459_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_415AFCEF_4E07_D8CF_41BA_CAC19DA3069E"},{"hfov":16.61,"vfov":3.59,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","pitch":-9.57,"id":"HotspotPanoramaOverlayTextImage_415ADCEF_4E07_D8CF_41BA_1106F18BE490","distance":50,"yaw":-72.39,"image":{"class":"ImageResource","levels":["this.imlevel_5EB84F1C_4E1A_5951_41B8_E474EC391126"]},"data":{"label":"Apogee"},"horizontalAlign":"right"},{"height":500,"width":1000,"bitrate":900,"url":trans('videolevel_5ED9AA66_4E1A_7BF1_41A4_DFEA952617F0.url'),"framerate":24,"class":"VideoResourceLevel","posterURL":trans('videolevel_5ED9AA66_4E1A_7BF1_41A4_DFEA952617F0.posterURL'),"type":"video/mp4","id":"videolevel_5ED9AA66_4E1A_7BF1_41A4_DFEA952617F0"},{"class":"ImageResourceLevel","width":339.26,"height":80.41,"url":trans('imlevel_4649F062_48EE_805E_41D0_A416D1C82C0B.url'),"id":"imlevel_4649F062_48EE_805E_41D0_A416D1C82C0B"},{"class":"ImageResourceLevel","width":475.59,"height":81.59,"url":trans('imlevel_4649F081_48EE_80DD_41C8_68B341019360.url'),"id":"imlevel_4649F081_48EE_80DD_41C8_68B341019360"},{"class":"ImageResourceLevel","width":560.53,"height":120.3,"url":trans('imlevel_5EB60EBE_4E1A_5B51_41BE_AC9F9B8BD7E5.url'),"id":"imlevel_5EB60EBE_4E1A_5B51_41BE_AC9F9B8BD7E5"},{"class":"ImageResourceLevel","width":560.53,"height":120.3,"url":trans('imlevel_5EB64EDD_4E1A_58D3_41C4_577A34F1382E.url'),"id":"imlevel_5EB64EDD_4E1A_58D3_41C4_577A34F1382E"},{"class":"ImageResourceLevel","width":560.53,"height":120.3,"url":trans('imlevel_5EB86F0C_4E1A_5931_41D1_AFED7F39082D.url'),"id":"imlevel_5EB86F0C_4E1A_5931_41D1_AFED7F39082D"},{"class":"ImageResourceLevel","width":560.53,"height":120.3,"url":trans('imlevel_5EB84F1C_4E1A_5951_41B8_E474EC391126.url'),"id":"imlevel_5EB84F1C_4E1A_5951_41B8_E474EC391126"}],"borderRadius":0,"backgroundColorRatios":[0],"width":"100%","verticalAlign":"top","scripts":{"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"getKey":TDV.Tour.Script.getKey,"cloneCamera":TDV.Tour.Script.cloneCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeech":TDV.Tour.Script.textToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlays":TDV.Tour.Script.getOverlays,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"clone":TDV.Tour.Script.clone,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoForward":TDV.Tour.Script.historyGoForward,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showWindow":TDV.Tour.Script.showWindow,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"existsKey":TDV.Tour.Script.existsKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"executeJS":TDV.Tour.Script.executeJS,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"mixObject":TDV.Tour.Script.mixObject,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setLocale":TDV.Tour.Script.setLocale,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizFinish":TDV.Tour.Script.quizFinish,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaByName":TDV.Tour.Script.getMediaByName,"setValue":TDV.Tour.Script.setValue,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia},"class":"Player","downloadEnabled":false,"scrollBarVisible":"rollOver","mediaActivationMode":"window","id":"rootPlayer","scrollBarColor":"#000000","propagateClick":false,"paddingLeft":0,"mouseWheelEnabled":true,"backgroundOpacity":1,"paddingRight":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"vrPolyfillScale":0.75,"backgroundColorDirection":"vertical","children":["this.MainViewer"],"backgroundPreloadEnabled":true,"overflow":"hidden","backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"defaultVRPointer":"laser","scrollBarWidth":10,"borderSize":0,"scrollBarMargin":2,"gap":10,"layout":"absolute","height":"100%","start":"this.init()","menu":["this.TDVAuthor"],"paddingTop":0,"minHeight":20,"data":{"defaultLocale":"de","locales":{"de":"locale/de.txt"},"name":"Player456","textToSpeechConfig":{"rate":1,"volume":1,"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false}},"contentOpaque":false,"shadow":false,"paddingBottom":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.32.js.map
})();
//Generated with v2022.0.32, Thu Apr 21 2022