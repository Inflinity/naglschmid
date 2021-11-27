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
    var d = {"desktopMipmappingEnabled":false,"minWidth":20,"scrollBarMargin":2,"width":"100%","gap":10,"backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"backgroundColorDirection":"vertical","paddingTop":0,"scrollBarWidth":10,"overflow":"hidden","id":"rootPlayer","mouseWheelEnabled":true,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"left","defaultVRPointer":"laser","paddingBottom":0,"toolTipHorizontalAlign":"center","paddingRight":0,"class":"Player","backgroundPreloadEnabled":true,"verticalAlign":"top","scrollBarColor":"#000000","mediaActivationMode":"window","children":["this.MainViewer"],"height":"100%","backgroundColor":["#000000"],"layout":"absolute","borderRadius":0,"vrPolyfillScale":0.75,"downloadEnabled":false,"backgroundOpacity":1,"scrollBarVisible":"rollOver","definitions": [{"translationTransitionDuration":1000,"subtitlesTextShadowColor":"#000000","playbackBarBorderSize":0,"toolTipPaddingRight":6,"subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowVerticalLength":0,"toolTipOpacity":1,"subtitlesShadow":false,"width":"100%","playbackBarHeadShadowOpacity":0.7,"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","class":"ViewerArea","toolTipFontSize":"1.11vmin","transitionDuration":500,"subtitlesOpacity":1,"height":"100%","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderSize":0,"toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderSize":1,"borderRadius":0,"progressBackgroundColorRatios":[0],"toolTipPaddingTop":4,"playbackBarLeft":0,"subtitlesPaddingLeft":5,"subtitlesGap":0,"progressOpacity":1,"progressRight":0,"playbackBarHeadBorderRadius":0,"toolTipShadowOpacity":1,"playbackBarProgressOpacity":1,"toolTipShadowVerticalLength":0,"progressBarBorderColor":"#000000","playbackBarHeadShadow":true,"progressBarBackgroundColorDirection":"vertical","subtitlesTextShadowBlurRadius":0,"progressBarBackgroundColorRatios":[0],"firstTransitionDuration":0,"borderSize":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadOpacity":1,"minWidth":100,"progressBackgroundColorDirection":"vertical","minHeight":50,"doubleClickAction":"toggle_fullscreen","toolTipShadowColor":"#333333","subtitlesBottom":50,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"toolTipBackgroundColor":"#F6F6F6","progressBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","toolTipDisplayTime":600,"progressBarBackgroundColor":["#3399FF"],"surfaceReticleOpacity":0.6,"subtitlesPaddingRight":5,"subtitlesTop":0,"toolTipPaddingLeft":6,"progressBackgroundColor":["#FFFFFF"],"paddingTop":0,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipFontWeight":"normal","surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"transitionMode":"blending","propagateClick":false,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"toolTipTextShadowColor":"#000000","progressBackgroundOpacity":1,"progressBottom":0,"paddingBottom":0,"progressBarBorderRadius":0,"toolTipBorderColor":"#767676","progressBorderSize":0,"progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarBorderRadius":0,"playbackBarHeight":10,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowOpacity":0,"subtitlesFontSize":"3vmin","subtitlesFontColor":"#FFFFFF","toolTipShadowBlurRadius":3,"subtitlesBorderSize":0,"progressHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"subtitlesVerticalAlign":"bottom","subtitlesPaddingBottom":5,"subtitlesHorizontalAlign":"center","playbackBarProgressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderColor":"#FFFFFF","progressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","toolTipShadowHorizontalLength":0,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","progressLeft":0,"playbackBarBackgroundOpacity":1,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","subtitlesBorderColor":"#FFFFFF","toolTipFontFamily":"Arial","subtitlesPaddingTop":5,"subtitlesFontWeight":"normal","toolTipFontStyle":"normal","vrPointerSelectionTime":2000,"subtitlesTextShadowVerticalLength":1,"playbackBarBottom":5,"playbackBarRight":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadShadowBlurRadius":3,"shadow":false,"playbackBarProgressBorderRadius":0},{"overlays":["this.overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0","this.overlay_6C3E4F56_6260_0773_41B8_76F85C93723F","this.overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D","this.overlay_6DA80EF9_6220_0931_41C4_44AA303D8115"],"label":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.label'),"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0","class":"Panorama","frames":[{"front":{"class":"ImageResource","levels":[{"height":8192,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":16,"tags":"ondemand"},{"height":4096,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":8,"tags":"ondemand"},{"height":2048,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":4,"tags":"ondemand"},{"height":1024,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":2,"tags":"ondemand"},{"height":512,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":1,"tags":["ondemand","preload"]}]},"right":{"class":"ImageResource","levels":[{"height":8192,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":16,"tags":"ondemand"},{"height":4096,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":8,"tags":"ondemand"},{"height":2048,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":4,"tags":"ondemand"},{"height":1024,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":2,"tags":"ondemand"},{"height":512,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":1,"tags":["ondemand","preload"]}]},"class":"CubicPanoramaFrame","back":{"class":"ImageResource","levels":[{"height":8192,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":16,"tags":"ondemand"},{"height":4096,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":8,"tags":"ondemand"},{"height":2048,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":4,"tags":"ondemand"},{"height":1024,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":2,"tags":"ondemand"},{"height":512,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":1,"tags":["ondemand","preload"]}]},"left":{"class":"ImageResource","levels":[{"height":8192,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":16,"tags":"ondemand"},{"height":4096,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":8,"tags":"ondemand"},{"height":2048,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":4,"tags":"ondemand"},{"height":1024,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":2,"tags":"ondemand"},{"height":512,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":1,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg"}],"hfov":360,"pitch":0,"partial":false,"vfov":62.32,"data":{"subtitle":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.subtitle','panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.data.subtitle'),"label":"Naglschmid Store"},"hfovMax":130,"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg"},{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_73AFFB48_6176_C051_41A7_647BF05F66DF","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_72A47A75_6220_0931_41BA_AE374FD260D8, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_72A47A75_6220_0931_41BA_AE374FD260D8, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_72A47A75_6220_0931_41BA_AE374FD260D8, 0)"}],"id":"playList_72A47A75_6220_0931_41BA_AE374FD260D8"},{"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera","media":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"clickAction":"play_pause","viewerArea":"this.MainViewer","class":"VideoPlayer","displayPlaybackBar":true,"displayPlayOverlay":true,"id":"MainViewerVideoPlayer"},{"video":{"class":"VideoResource","width":1440,"height":1080,"levels":[{"height":1080,"width":1440,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.m3u8","posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","class":"VideoResourceLevel","type":"application/x-mpegurl","framerate":30},{"height":1080,"width":1440,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.mp4","posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","class":"VideoResourceLevel","type":"video/mp4","bitrate":1057,"framerate":30}]},"chromaColor":"#FDFDFD","loop":false,"height":1080,"thumbnailUrl":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_t.jpg","width":1440,"id":"video_73AFFB48_6176_C051_41A7_647BF05F66DF","label":trans('video_73AFFB48_6176_C051_41A7_647BF05F66DF.label'),"chromaSmoothing":0.27,"data":{"label":"mantra"},"autoplay":true,"class":"Video","chromaThreshold":0.01,"scaleMode":"fit_inside"},{"data":{"label":"kelpwald"},"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_72CF44D0_615E_C071_41C4_E097EEF9FD6D","distance":50,"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"class":"PanoramaPoint","yaw":-177.82,"pitch":18.9},{"class":"PanoramaPoint","yaw":-162.44,"pitch":17.88},{"class":"PanoramaPoint","yaw":-162.42,"pitch":-3.54},{"class":"PanoramaPoint","yaw":-177.84,"pitch":-3.65}],"data":{"label":"kelpwald"}}],"id":"overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0"},{"data":{"label":"Text"},"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"],"maps":[],"useHandCursor":false,"class":"HotspotPanoramaOverlay","items":[{"vertices":[{"class":"PanoramaPoint","yaw":-161.4,"pitch":17.71},{"class":"PanoramaPoint","yaw":-154.8,"pitch":16.8},{"class":"PanoramaPoint","yaw":-154.9,"pitch":7.6},{"class":"PanoramaPoint","yaw":-161.26,"pitch":8.21}],"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":221,"height":314,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_pkzp3yon.png"}]},"distance":50,"data":{"label":"Text"},"class":"QuadHotspotPanoramaOverlayImage"}],"id":"overlay_6C3E4F56_6260_0773_41B8_76F85C93723F"},{"data":{"label":"Cryptoshells_Collection"},"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B","distance":50,"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"class":"PanoramaPoint","yaw":54.5,"pitch":24.85},{"class":"PanoramaPoint","yaw":79.47,"pitch":29.35},{"class":"PanoramaPoint","yaw":79.73,"pitch":-29.21},{"class":"PanoramaPoint","yaw":54.5,"pitch":-25.15}],"data":{"label":"Cryptoshells_Collection"}}],"id":"overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D"},{"data":{"label":"Text"},"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6DA98EF9_6220_0931_41C4_D576EB9A6F94"],"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vertices":[{"class":"PanoramaPoint","yaw":3.9,"pitch":7.9},{"class":"PanoramaPoint","yaw":17.6,"pitch":7.7},{"class":"PanoramaPoint","yaw":17.47,"pitch":5.82},{"class":"PanoramaPoint","yaw":3.92,"pitch":5.96}],"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":459,"height":66,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_e43pn04r.png"}]},"distance":50,"data":{"label":"Text"},"class":"QuadHotspotPanoramaOverlayImage"}],"id":"overlay_6DA80EF9_6220_0931_41C4_44AA303D8115"},{"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_75B7F774_6156_4031_41C6_E09B05748A96.source'), '_blank')","mapColor":"any","id":"HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"},{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":800,"height":1131,"url":"media/res_72CF44D0_615E_C071_41C4_E097EEF9FD6D_0.png"}],"id":"res_72CF44D0_615E_C071_41C4_E097EEF9FD6D"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"},{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":1000,"height":2000,"url":"media/res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B_0.png"}],"id":"res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6DA98EF9_6220_0931_41C4_D576EB9A6F94"}],"scripts":{"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"translate":TDV.Tour.Script.translate,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"mixObject":TDV.Tour.Script.mixObject,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizStart":TDV.Tour.Script.quizStart,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"getKey":TDV.Tour.Script.getKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"unregisterKey":TDV.Tour.Script.unregisterKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"clone":TDV.Tour.Script.clone,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"init":TDV.Tour.Script.init,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"initQuiz":TDV.Tour.Script.initQuiz,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getComponentByName":TDV.Tour.Script.getComponentByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"textToSpeech":TDV.Tour.Script.textToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPixels":TDV.Tour.Script.getPixels,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMainViewer":TDV.Tour.Script.getMainViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setLocale":TDV.Tour.Script.setLocale,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMapLocation":TDV.Tour.Script.setMapLocation,"downloadFile":TDV.Tour.Script.downloadFile,"setValue":TDV.Tour.Script.setValue,"existsKey":TDV.Tour.Script.existsKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaByName":TDV.Tour.Script.getMediaByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot},"start":"this.init()","contentOpaque":false,"borderSize":0,"shadow":false,"minHeight":20,"data":{"name":"Player615","defaultLocale":"de","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Sat Nov 27 2021