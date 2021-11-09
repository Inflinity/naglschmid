(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
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
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
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
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
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
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"gap":10,"toolTipHorizontalAlign":"center","paddingTop":0,"width":"100%","scrollBarWidth":10,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"propagateClick":false,"horizontalAlign":"left","definitions": [{"class":"PlayList","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_13D7783F_03EB_A78C_4185_A54A41A6C91B, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_13D7783F_03EB_A78C_4185_A54A41A6C91B, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_13D7783F_03EB_A78C_4185_A54A41A6C91B, 0)"}],"id":"playList_13D7783F_03EB_A78C_4185_A54A41A6C91B"},{"autoplay":true,"loop":false,"height":200,"scaleMode":"fit_inside","class":"Video","chromaThreshold":0.38,"width":200,"id":"video_F6766298_E674_8449_41C2_907D1ADED367","label":trans('video_F6766298_E674_8449_41C2_907D1ADED367.label'),"chromaSmoothing":0.09,"thumbnailUrl":"media/video_F6766298_E674_8449_41C2_907D1ADED367_t.jpg","video":{"class":"VideoResource","levels":[{"class":"VideoResourceLevel","posterURL":"media/video_F6766298_E674_8449_41C2_907D1ADED367_poster.jpg","url":"media/video_F6766298_E674_8449_41C2_907D1ADED367.mp4","height":200,"width":200,"framerate":24,"type":"video/mp4","bitrate":72}],"hasAudio":false,"height":200,"width":200},"data":{"label":"opensea"},"chromaColor":"#F9FE0A"},{"class":"VideoPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"displayPlayOverlay":true,"clickAction":"play_pause","id":"MainViewerVideoPlayer"},{"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","zoomEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"aaEnabled":true,"surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer"},{"toolTipBorderRadius":3,"subtitlesVerticalAlign":"bottom","subtitlesFontSize":"3vmin","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"subtitlesGap":0,"subtitlesTextShadowHorizontalLength":1,"toolTipFontWeight":"normal","playbackBarHeadBorderRadius":0,"toolTipShadowVerticalLength":0,"firstTransitionDuration":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"id":"MainViewer","subtitlesBackgroundColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesTop":0,"toolTipTextShadowColor":"#000000","propagateClick":false,"subtitlesFontFamily":"Arial","progressOpacity":1,"progressRight":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingLeft":5,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowOpacity":0,"data":{"name":"Main Viewer"},"paddingRight":0,"width":"100%","progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"paddingLeft":0,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"subtitlesPaddingBottom":5,"transitionDuration":500,"vrPointerSelectionTime":2000,"height":"100%","playbackBarProgressOpacity":1,"playbackBarHeadOpacity":1,"toolTipPaddingRight":6,"subtitlesEnabled":true,"class":"ViewerArea","progressBorderColor":"#000000","subtitlesPaddingRight":5,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"toolTipFontColor":"#606060","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowOpacity":1,"vrPointerColor":"#FFFFFF","progressBarOpacity":0,"toolTipFontFamily":"Arial","subtitlesBorderSize":0,"progressBottom":0,"playbackBarOpacity":1,"borderSize":0,"surfaceReticleOpacity":0.6,"playbackBarBorderSize":0,"toolTipTextShadowBlurRadius":3,"subtitlesShadow":false,"playbackBarLeft":0,"progressBorderSize":0,"minHeight":50,"playbackBarProgressBorderSize":0,"playbackBarHeadHeight":15,"progressBarBorderRadius":0,"minWidth":100,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":10,"playbackBarHeadShadowColor":"#000000","toolTipShadowHorizontalLength":0,"subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"surfaceReticleSelectionOpacity":1,"toolTipFontSize":"1.11vmin","playbackBarRight":0,"toolTipHorizontalAlign":"center","playbackBarHeight":10,"paddingTop":0,"subtitlesOpacity":1,"progressBackgroundOpacity":0,"subtitlesHorizontalAlign":"center","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBackgroundColorRatios":[0,1],"paddingBottom":0,"playbackBarHeadBorderSize":0,"progressLeft":0,"toolTipOpacity":1,"playbackBarProgressBorderRadius":0,"progressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontColor":"#FFFFFF","toolTipPaddingLeft":6,"toolTipFontStyle":"normal","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"playbackBarHeadShadow":true,"playbackBarBorderRadius":0,"subtitlesTextDecoration":"none","playbackBarBorderColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","borderRadius":0,"subtitlesFontWeight":"normal","translationTransitionDuration":1000,"toolTipBorderSize":1,"subtitlesTextShadowBlurRadius":0,"toolTipPaddingTop":4,"playbackBarProgressBackgroundColorDirection":"vertical","displayTooltipInSurfaceSelection":true,"subtitlesPaddingTop":5,"subtitlesTextShadowColor":"#000000","toolTipShadowSpread":0,"toolTipDisplayTime":600,"doubleClickAction":"toggle_fullscreen","toolTipShadowOpacity":1,"toolTipShadowColor":"#333333","displayTooltipInTouchScreens":true,"toolTipBackgroundColor":"#F6F6F6","toolTipBorderColor":"#767676","shadow":false,"playbackBarHeadShadowOpacity":0.7},{"class":"PlayList","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_EADF734B_E4E2_4241_41E0_E824D9765646","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_13D7683F_03EB_A78C_4186_50F3D8C2376A, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_13D7683F_03EB_A78C_4186_50F3D8C2376A, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_13D7683F_03EB_A78C_4186_50F3D8C2376A, 0)"}],"id":"playList_13D7683F_03EB_A78C_4186_50F3D8C2376A"},{"autoplay":true,"loop":false,"height":500,"scaleMode":"fit_inside","class":"Video","chromaThreshold":0.07,"width":1000,"id":"video_EADF734B_E4E2_4241_41E0_E824D9765646","label":trans('video_EADF734B_E4E2_4241_41E0_E824D9765646.label'),"chromaSmoothing":0,"thumbnailUrl":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646_t.jpg","video":{"class":"VideoResource","levels":[{"class":"VideoResourceLevel","posterURL":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646_poster.jpg","url":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646.mp4","height":500,"width":1000,"framerate":24,"type":"video/mp4","bitrate":900}],"hasAudio":false,"height":500,"width":1000},"data":{"label":"logo"},"chromaColor":"#324E70"},{"class":"PlayList","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_F6766298_E674_8449_41C2_907D1ADED367","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_13D7383F_03EB_A78C_4189_D9CE93F050AF, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_13D7383F_03EB_A78C_4189_D9CE93F050AF, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_13D7383F_03EB_A78C_4189_D9CE93F050AF, 0)"}],"id":"playList_13D7383F_03EB_A78C_4189_D9CE93F050AF"},{"hfovMax":130,"vfov":61.56,"label":trans('panorama_0FBFFB4E_03DB_998C_417F_0994201E298C.label'),"partial":false,"frames":[{"class":"CubicPanoramaFrame","front":{"class":"ImageResource","levels":[{"width":6144,"colCount":12,"rowCount":12,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/f/0/{row}_{column}.jpg","tags":"ondemand","height":6144,"class":"TiledImageResourceLevel"},{"width":3072,"colCount":6,"rowCount":6,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/f/1/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel"},{"width":1536,"colCount":3,"rowCount":3,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/f/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel"},{"width":1024,"colCount":2,"rowCount":2,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/f/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"width":512,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/f/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"width":1536,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/f/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"width":2048,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/f/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}]},"right":{"class":"ImageResource","levels":[{"width":6144,"colCount":12,"rowCount":12,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/r/0/{row}_{column}.jpg","tags":"ondemand","height":6144,"class":"TiledImageResourceLevel"},{"width":3072,"colCount":6,"rowCount":6,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/r/1/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel"},{"width":1536,"colCount":3,"rowCount":3,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/r/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel"},{"width":1024,"colCount":2,"rowCount":2,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/r/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"width":512,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/r/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"width":1536,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/r/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"width":2048,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/r/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}]},"back":{"class":"ImageResource","levels":[{"width":6144,"colCount":12,"rowCount":12,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/b/0/{row}_{column}.jpg","tags":"ondemand","height":6144,"class":"TiledImageResourceLevel"},{"width":3072,"colCount":6,"rowCount":6,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/b/1/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel"},{"width":1536,"colCount":3,"rowCount":3,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/b/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel"},{"width":1024,"colCount":2,"rowCount":2,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/b/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"width":512,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/b/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"width":1536,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/b/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"width":2048,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/b/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}]},"left":{"class":"ImageResource","levels":[{"width":6144,"colCount":12,"rowCount":12,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/l/0/{row}_{column}.jpg","tags":"ondemand","height":6144,"class":"TiledImageResourceLevel"},{"width":3072,"colCount":6,"rowCount":6,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/l/1/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel"},{"width":1536,"colCount":3,"rowCount":3,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/l/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel"},{"width":1024,"colCount":2,"rowCount":2,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/l/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"width":512,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/l/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"width":1536,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/l/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"width":2048,"colCount":1,"rowCount":1,"url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_0/l/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}]},"thumbnailUrl":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_t.jpg"}],"thumbnailUrl":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_t.jpg","class":"Panorama","overlays":["this.overlay_0FBF1B4F_03DB_998C_418B_E68A0DE14A5C","this.overlay_0FBF0B4F_03DB_998C_4189_4D8B565DF26D","this.overlay_0FBF7B4F_03DB_998C_4172_004733E6F09F","this.overlay_0FBF5B4F_03DB_998C_4182_168D06823FBA","this.overlay_0E320E52_03DD_9B94_416A_979C217F7028","this.overlay_0C8FA8EA_03DA_98B5_4188_6B084FD5EAE1","this.overlay_0DE2EBFA_03D6_7894_418B_A53A1F67D360"],"data":{"label":"H0000 Panorama"},"pitch":0,"hfov":360,"id":"panorama_0FBFFB4E_03DB_998C_417F_0994201E298C"},{"autoplay":true,"loop":false,"height":1080,"class":"Video","width":786,"id":"video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6","label":trans('video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6.label'),"thumbnailUrl":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6_t.jpg","video":{"class":"VideoResource","levels":[{"class":"VideoResourceLevel","posterURL":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6_poster.jpg","url":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6.mp4","height":1006,"width":732,"framerate":24,"type":"video/mp4","bitrate":1325}],"hasAudio":false,"height":1006,"width":732},"data":{"label":"kelpwald"},"scaleMode":"fit_inside"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_camera","media":"this.panorama_0FBFFB4E_03DB_998C_417F_0994201E298C","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"class":"PlayList","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_13D7283F_03EB_A78C_4169_6C748B46B8B8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_13D7283F_03EB_A78C_4169_6C748B46B8B8, 0)"}],"id":"playList_13D7283F_03EB_A78C_4169_6C748B46B8B8"},{"autoplay":true,"loop":false,"height":200,"scaleMode":"fit_inside","class":"Video","chromaThreshold":0.21,"width":200,"id":"video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8","label":trans('video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8.label'),"chromaSmoothing":0.17,"thumbnailUrl":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8_t.jpg","video":{"class":"VideoResource","levels":[{"class":"VideoResourceLevel","posterURL":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8_poster.jpg","url":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8.mp4","height":200,"width":200,"framerate":24,"type":"video/mp4","bitrate":72}],"hasAudio":false,"height":200,"width":200},"data":{"label":"ipfs"},"chromaColor":"#0407F4"},{"class":"PanoramaCamera","initialSequence":"this.sequence_CA6FE8CF_C0DE_FDB5_41E0_99C273A27A85","initialPosition":{"class":"PanoramaCameraPosition","yaw":-1.7,"pitch":0},"automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_camera"},{"autoplay":true,"loop":true,"video":{"class":"VideoResource","levels":[{"class":"VideoResourceLevel","posterURL":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646_poster.jpg","url":"media/video_EADF734B_E4E2_4241_41E0_E824D9765646.mp4","height":500,"width":1000,"framerate":24,"type":"video/mp4","bitrate":900}],"hasAudio":false,"height":500,"width":1000},"useHandCursor":true,"class":"VideoPanoramaOverlay","chromaThreshold":0.07,"pitch":5.18,"hfov":49.87,"id":"overlay_0FBF1B4F_03DB_998C_418B_E68A0DE14A5C","image":"this.res_E853527B_E694_84CF_41EA_67732953D42F","distance":50,"yaw":-1.26,"click":"if(this.overlay_0FBF1B4F_03DB_998C_418B_E68A0DE14A5C.get('state') != 'playing'){ this.overlay_0FBF1B4F_03DB_998C_418B_E68A0DE14A5C.play(); } else { this.overlay_0FBF1B4F_03DB_998C_418B_E68A0DE14A5C.pause(); }","videoVisibleOnStop":false,"chromaSmoothing":0,"cues":[],"enabledInCardboard":true,"vfov":26.25,"data":{"hasAudio":false,"label":"Video"},"chromaColor":"#324E70"},{"autoplay":true,"loop":true,"video":{"class":"VideoResource","levels":[{"class":"VideoResourceLevel","posterURL":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8_poster.jpg","url":"media/video_EBB81EA2_E4E6_42C3_41E7_496504BFE7A8.mp4","height":200,"width":200,"framerate":24,"type":"video/mp4","bitrate":72}],"hasAudio":false,"height":200,"width":200},"useHandCursor":true,"class":"VideoPanoramaOverlay","chromaThreshold":0.21,"pitch":3.12,"hfov":1.67,"id":"overlay_0FBF0B4F_03DB_998C_4189_4D8B565DF26D","image":"this.res_E81A2A22_E673_8479_41E8_B6368B685FAC","distance":50,"yaw":-166.06,"click":"this.openLink(this.translate('LinkBehaviour_0CD5B1D9_03EA_6897_4171_113FC6256440.source'), '_blank')","videoVisibleOnStop":false,"chromaSmoothing":0.17,"cues":[],"enabledInCardboard":true,"vfov":1.61,"data":{"hasAudio":false,"label":"Video"},"chromaColor":"#0407F4"},{"autoplay":true,"distance":50,"videoVisibleOnStop":false,"loop":true,"image":"this.res_E8079800_E674_843A_41E6_D1C117BDEBC8","vertices":[{"class":"PanoramaPoint","yaw":-177.12,"pitch":10.81},{"class":"PanoramaPoint","yaw":-170.38,"pitch":10.74},{"class":"PanoramaPoint","yaw":-170.52,"pitch":2.06},{"class":"PanoramaPoint","yaw":-177.22,"pitch":2.08}],"useHandCursor":true,"enabled":false,"class":"QuadVideoPanoramaOverlay","cues":[],"data":{"hasAudio":false,"label":"Video"},"enabledInCardboard":true,"video":{"class":"VideoResource","levels":[{"class":"VideoResourceLevel","posterURL":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6_poster.jpg","url":"media/video_EBA98E7D_E4E1_C246_41E0_97AA7D41E7B6.mp4","height":1006,"width":732,"framerate":24,"type":"video/mp4","bitrate":1325}],"hasAudio":false,"height":1006,"width":732},"id":"overlay_0FBF7B4F_03DB_998C_4172_004733E6F09F"},{"autoplay":true,"loop":true,"video":{"class":"VideoResource","levels":[{"class":"VideoResourceLevel","posterURL":"media/video_F6766298_E674_8449_41C2_907D1ADED367_poster.jpg","url":"media/video_F6766298_E674_8449_41C2_907D1ADED367.mp4","height":200,"width":200,"framerate":24,"type":"video/mp4","bitrate":72}],"hasAudio":false,"height":200,"width":200},"useHandCursor":true,"class":"VideoPanoramaOverlay","chromaThreshold":0.38,"pitch":3.17,"hfov":1.54,"id":"overlay_0FBF5B4F_03DB_998C_4182_168D06823FBA","image":"this.res_F623B1B0_E66F_8459_41E5_72397DD94723","distance":50,"yaw":-168.3,"click":"this.openLink(this.translate('LinkBehaviour_0C517E5F_03EA_BB8C_4180_B172B9A565B6.source'), '_blank')","videoVisibleOnStop":false,"chromaSmoothing":0.09,"cues":[],"enabledInCardboard":true,"vfov":1.59,"data":{"hasAudio":false,"label":"Video"},"chromaColor":"#F9FE0A"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Cryptoshells_Font"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_0E372E57_03DD_9B9C_415A_44910687FCEB"],"items":[{"image":"this.res_0C416533_03EB_A994_4189_CF6464CA0232","class":"QuadHotspotPanoramaOverlayImage","distance":50,"vertices":[{"class":"PanoramaPoint","yaw":54.67,"pitch":25.36},{"class":"PanoramaPoint","yaw":78.91,"pitch":29.95},{"class":"PanoramaPoint","yaw":78.91,"pitch":26.76},{"class":"PanoramaPoint","yaw":54.52,"pitch":22.28}],"data":{"label":"Cryptoshells_Font"}}],"maps":[],"id":"overlay_0E320E52_03DD_9B94_416A_979C217F7028"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Kelbwald Chroma_small"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_0C8888EC_03DA_988D_4188_3B164C665180"],"items":[{"image":"this.res_0C422535_03EB_A99C_4180_06401E2EC353","class":"QuadHotspotPanoramaOverlayImage","distance":50,"vertices":[{"class":"PanoramaPoint","yaw":-177.17,"pitch":17.09},{"class":"PanoramaPoint","yaw":-170.38,"pitch":16.94},{"class":"PanoramaPoint","yaw":-170.46,"pitch":6.16},{"class":"PanoramaPoint","yaw":-177.24,"pitch":6.29}],"data":{"label":"Kelbwald Chroma_small"}}],"maps":[],"id":"overlay_0C8FA8EA_03DA_98B5_4188_6B084FD5EAE1"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Text"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_0DE08BFD_03D6_788C_4137_A1071B9852EC"],"items":[{"vertices":[{"class":"PanoramaPoint","yaw":-8.13,"pitch":-11.37},{"class":"PanoramaPoint","yaw":5.94,"pitch":-11.49},{"class":"PanoramaPoint","yaw":6,"pitch":-13.82},{"class":"PanoramaPoint","yaw":-8.19,"pitch":-13.76}],"class":"QuadHotspotPanoramaOverlayImage","image":{"class":"ImageResource","levels":[{"height":79,"width":467,"class":"ImageResourceLevel","url":"media/panorama_0FBFFB4E_03DB_998C_417F_0994201E298C_HS_c9djz1oy.png"}]},"distance":50,"data":{"label":"Text"}}],"maps":[],"id":"overlay_0DE2EBFA_03D6_7894_418B_A53A1F67D360"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":3.19,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":35.65},{"yawSpeed":3.19,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":288700},{"yawSpeed":3.19,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":35.65}],"id":"sequence_CA6FE8CF_C0DE_FDB5_41E0_99C273A27A85"},{"class":"ImageResource","levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_E853527B_E694_84CF_41EA_67732953D42F_0.jpg"}],"id":"res_E853527B_E694_84CF_41EA_67732953D42F"},{"class":"ImageResource","levels":[{"height":200,"width":200,"class":"ImageResourceLevel","url":"media/res_E81A2A22_E673_8479_41E8_B6368B685FAC_0.jpg"}],"id":"res_E81A2A22_E673_8479_41E8_B6368B685FAC"},{"class":"ImageResource","levels":[{"height":1080,"width":786,"class":"ImageResourceLevel","url":"media/res_E8079800_E674_843A_41E6_D1C117BDEBC8_0.jpg"}],"id":"res_E8079800_E674_843A_41E6_D1C117BDEBC8"},{"class":"ImageResource","levels":[{"height":200,"width":200,"class":"ImageResourceLevel","url":"media/res_F623B1B0_E66F_8459_41E5_72397DD94723_0.jpg"}],"id":"res_F623B1B0_E66F_8459_41E5_72397DD94723"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_0E372E57_03DD_9B9C_415A_44910687FCEB"},{"class":"ImageResource","levels":[{"height":150,"width":1500,"class":"ImageResourceLevel","url":"media/res_0C416533_03EB_A994_4189_CF6464CA0232_0.png"}],"id":"res_0C416533_03EB_A994_4189_CF6464CA0232"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_0D40D14F_03D5_A98C_4170_18C04E174281.source'), '_blank')","id":"HotspotPanoramaOverlayArea_0C8888EC_03DA_988D_4188_3B164C665180"},{"class":"ImageResource","levels":[{"height":769,"width":463,"class":"ImageResourceLevel","url":"media/res_0C422535_03EB_A99C_4180_06401E2EC353_0.png"}],"id":"res_0C422535_03EB_A99C_4180_06401E2EC353"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_0DE08BFD_03D6_788C_4137_A1071B9852EC"}],"scrollBarMargin":2,"contentOpaque":false,"backgroundPreloadEnabled":true,"backgroundColorRatios":[0],"paddingRight":0,"verticalAlign":"top","paddingLeft":0,"vrPolyfillScale":0.75,"scrollBarVisible":"rollOver","desktopMipmappingEnabled":false,"backgroundColorDirection":"vertical","mobileMipmappingEnabled":false,"borderRadius":0,"backgroundOpacity":1,"height":"100%","overflow":"hidden","backgroundColor":["#333333"],"class":"Player","children":["this.MainViewer"],"defaultVRPointer":"laser","mediaActivationMode":"window","scripts":{"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"translate":TDV.Tour.Script.translate,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"initQuiz":TDV.Tour.Script.initQuiz,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMapLocation":TDV.Tour.Script.setMapLocation,"openLink":TDV.Tour.Script.openLink,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getOverlays":TDV.Tour.Script.getOverlays,"init":TDV.Tour.Script.init,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"clone":TDV.Tour.Script.clone,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"existsKey":TDV.Tour.Script.existsKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMainViewer":TDV.Tour.Script.getMainViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"mixObject":TDV.Tour.Script.mixObject,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizStart":TDV.Tour.Script.quizStart,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizFinish":TDV.Tour.Script.quizFinish,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPixels":TDV.Tour.Script.getPixels,"historyGoBack":TDV.Tour.Script.historyGoBack,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"setValue":TDV.Tour.Script.setValue,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playAudioList":TDV.Tour.Script.playAudioList,"registerKey":TDV.Tour.Script.registerKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"downloadFile":TDV.Tour.Script.downloadFile},"downloadEnabled":false,"scrollBarOpacity":0.5,"layout":"absolute","scrollBarColor":"#000000","borderSize":0,"start":"this.init()","minWidth":20,"shadow":false,"minHeight":20,"data":{"name":"Player937","defaultLocale":"de","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.14.js.map
//Generated with v2021.2.14, Tue Nov 9 2021