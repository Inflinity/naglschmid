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
var script = {"definitions": [{"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"data":{"name":"Main Viewer"},"translationTransitionDuration":1000,"borderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowColor":"#000000","width":"100%","playbackBarHeadShadowBlurRadius":3,"progressBorderColor":"#000000","id":"MainViewer","progressBarBackgroundColor":["#3399FF"],"shadow":false,"playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"toolTipBorderSize":1,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","subtitlesFontColor":"#FFFFFF","playbackBarLeft":0,"toolTipFontWeight":"normal","toolTipPaddingTop":4,"paddingRight":0,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"toolTipHorizontalAlign":"center","toolTipShadowSpread":0,"progressBackgroundOpacity":1,"surfaceReticleOpacity":0.6,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","progressBorderSize":0,"subtitlesPaddingLeft":5,"progressHeight":10,"toolTipFontStyle":"normal","playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"subtitlesPaddingRight":5,"progressBarBorderRadius":0,"toolTipPaddingRight":6,"toolTipTextShadowBlurRadius":3,"playbackBarHeadHeight":15,"subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadow":true,"transitionMode":"blending","playbackBarHeadBorderRadius":0,"toolTipTextShadowOpacity":0,"toolTipFontFamily":"Arial","height":"100%","playbackBarHeadShadowOpacity":0.7,"playbackBarHeight":10,"borderSize":0,"toolTipShadowVerticalLength":0,"playbackBarHeadShadowColor":"#000000","toolTipShadowOpacity":1,"playbackBarOpacity":1,"progressLeft":0,"doubleClickAction":"toggle_fullscreen","subtitlesEnabled":true,"minWidth":100,"paddingTop":0,"minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBackgroundColor":"#F6F6F6","toolTipBorderRadius":3,"playbackBarBackgroundOpacity":1,"subtitlesTop":0,"firstTransitionDuration":0,"subtitlesFontSize":"3vmin","paddingBottom":0,"toolTipFontColor":"#606060","displayTooltipInSurfaceSelection":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadOpacity":1,"subtitlesPaddingBottom":5,"progressBorderRadius":0,"subtitlesTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","playbackBarHeadBackgroundColorDirection":"vertical","class":"ViewerArea","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowVerticalLength":0,"propagateClick":false,"toolTipOpacity":1,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","toolTipShadowBlurRadius":3,"subtitlesTextDecoration":"none","playbackBarProgressOpacity":1,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"vrPointerColor":"#FFFFFF","playbackBarHeadWidth":6,"subtitlesPaddingTop":5,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0,"transitionDuration":500,"subtitlesGap":0,"subtitlesShadow":false,"subtitlesBackgroundColor":"#000000","playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingBottom":4,"subtitlesOpacity":1,"progressBarBorderSize":0,"progressBackgroundColorRatios":[0],"progressRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBottom":5,"displayTooltipInTouchScreens":true,"subtitlesHorizontalAlign":"center","playbackBarBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","progressOpacity":1,"progressBarBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBorderSize":0,"toolTipShadowHorizontalLength":0,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"surfaceReticleColor":"#FFFFFF"},{"items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","media":"this.video_0B744D6F_05AB_E0CA_4196_5E099984E24A","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_2232912B_2D99_E0D4_41C0_72929A5CDB0B, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_2232912B_2D99_E0D4_41C0_72929A5CDB0B, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2232912B_2D99_E0D4_41C0_72929A5CDB0B, 0)"}],"class":"PlayList","id":"playList_2232912B_2D99_E0D4_41C0_72929A5CDB0B"},{"displayPlayOverlay":true,"displayPlaybackBar":true,"clickAction":"play_pause","class":"VideoPlayer","viewerArea":"this.MainViewer","id":"MainViewerVideoPlayer"},{"items":[{"camera":"this.panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_camera","class":"PanoramaPlayListItem","media":"this.panorama_0FF52F62_05A8_E0FA_4173_830D890CA291","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":-124.74,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_camera"},{"thumbnailUrl":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_t.jpg","hfovMax":130,"class":"Panorama","label":trans('panorama_0FF52F62_05A8_E0FA_4173_830D890CA291.label'),"hfov":360,"vfov":57.93,"frames":[{"thumbnailUrl":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_t.jpg","front":{"class":"ImageResource","levels":[{"width":8704,"rowCount":17,"colCount":17,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/0/{row}_{column}.jpg","height":8704,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":4608,"rowCount":9,"colCount":9,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/1/{row}_{column}.jpg","height":4608,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":2560,"rowCount":5,"colCount":5,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1536,"rowCount":3,"colCount":3,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1024,"rowCount":2,"colCount":2,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":512,"rowCount":1,"colCount":1,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"right":{"class":"ImageResource","levels":[{"width":8704,"rowCount":17,"colCount":17,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/0/{row}_{column}.jpg","height":8704,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":4608,"rowCount":9,"colCount":9,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/1/{row}_{column}.jpg","height":4608,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":2560,"rowCount":5,"colCount":5,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1536,"rowCount":3,"colCount":3,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1024,"rowCount":2,"colCount":2,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":512,"rowCount":1,"colCount":1,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"back":{"class":"ImageResource","levels":[{"width":8704,"rowCount":17,"colCount":17,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/0/{row}_{column}.jpg","height":8704,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":4608,"rowCount":9,"colCount":9,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/1/{row}_{column}.jpg","height":4608,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":2560,"rowCount":5,"colCount":5,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1536,"rowCount":3,"colCount":3,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1024,"rowCount":2,"colCount":2,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":512,"rowCount":1,"colCount":1,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"left":{"class":"ImageResource","levels":[{"width":8704,"rowCount":17,"colCount":17,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/0/{row}_{column}.jpg","height":8704,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":4608,"rowCount":9,"colCount":9,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/1/{row}_{column}.jpg","height":4608,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":2560,"rowCount":5,"colCount":5,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1536,"rowCount":3,"colCount":3,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1024,"rowCount":2,"colCount":2,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":512,"rowCount":1,"colCount":1,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Naglschmid - Home"},"overlays":["this.overlay_08D42221_05A8_2079_4193_20E08CB48162","this.overlay_030DD4EB_0EB7_4E87_41A3_2F4A3BE2C562","this.overlay_0365099C_0EB6_C681_41AB_C346FBB81D88","this.overlay_036CF98B_0EB6_C686_41A4_D5F3519E74C2","this.overlay_0083FFAD_0ECB_7A83_4191_387F22B41131","this.overlay_02BD58AF_0F08_7EDA_4194_198B4A89BC26","this.overlay_224A6CE5_2D79_E15D_41BD_75E5C18AE202","this.overlay_22834582_2D89_63D4_41C5_E89333D47AA5","this.overlay_3DBC2DB5_2D8B_233D_41C4_EA20CE6D7D74"],"partial":false,"pitch":0,"id":"panorama_0FF52F62_05A8_E0FA_4173_830D890CA291"},{"zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"arrowKeysAction":"translate","aaEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation"},{"video":"this.videores_0A87743E_05BB_E04A_4188_05F1E7B8063F","loop":false,"height":500,"width":1000,"scaleMode":"fit_inside","class":"Video","id":"video_0B744D6F_05AB_E0CA_4196_5E099984E24A","thumbnailUrl":"media/video_0B744D6F_05AB_E0CA_4196_5E099984E24A_t.jpg","chromaSmoothing":0.13,"label":trans('video_0B744D6F_05AB_E0CA_4196_5E099984E24A.label'),"chromaColor":"#324E70","chromaThreshold":0.14,"data":{"label":"glitch_logo"}},{"class":"PlayerMenuItem","label":"Matthias Naglschmid","id":"TDVAuthor"},{"videoVisibleOnStop":false,"useHandCursor":true,"autoplay":true,"vertices":[{"yaw":-167.92,"class":"PanoramaPoint","pitch":21.92},{"yaw":-107.7,"class":"PanoramaPoint","pitch":22.2},{"yaw":-107.89,"class":"PanoramaPoint","pitch":-3.86},{"yaw":-167.42,"class":"PanoramaPoint","pitch":-3.9}],"enabledInCardboard":true,"loop":true,"cues":[],"chromaThreshold":0.14,"image":"this.res_0BC55F67_05B8_60FA_4174_E9D486576BD4","class":"QuadVideoPanoramaOverlay","id":"overlay_08D42221_05A8_2079_4193_20E08CB48162","distance":50,"chromaSmoothing":0.13,"video":"this.videores_0A87743E_05BB_E04A_4188_05F1E7B8063F","chromaColor":"#324E70","data":{"hasAudio":false,"label":"Video"}},{"areas":["this.HotspotPanoramaOverlayArea_03A63585_0EB7_4E83_41A3_615E9FB34C95"],"maps":[],"enabledInCardboard":true,"data":{"label":"apogee_web"},"useHandCursor":true,"items":[{"distance":50,"yaw":-108.29,"pitch":3.12,"hfov":16.97,"vfov":17.99,"verticalAlign":"middle","horizontalAlign":"center","data":{"label":"apogee_web"},"image":"this.res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_030DD4EB_0EB7_4E87_41A3_2F4A3BE2C562"},{"areas":["this.HotspotPanoramaOverlayArea_00B5C9E0_0EB6_C681_41A3_7D04B1D4D519"],"maps":[],"enabledInCardboard":true,"data":{"label":"Text"},"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_03783999_0EB6_C683_417B_D9D99DED6127"],"class":"HotspotPanoramaOverlay","id":"overlay_0365099C_0EB6_C681_41AB_C346FBB81D88"},{"areas":["this.HotspotPanoramaOverlayArea_036339A6_0EB6_C681_41A2_C0311675CDB4"],"maps":[],"enabledInCardboard":true,"data":{"label":"Text"},"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_036E698A_0EB6_C686_419A_B66CF7426A38"],"class":"HotspotPanoramaOverlay","id":"overlay_036CF98B_0EB6_C686_41A4_D5F3519E74C2"},{"areas":["this.HotspotPanoramaOverlayArea_008A6FC9_0ECB_7A83_41A2_520AC7D3E70D"],"maps":[],"enabledInCardboard":true,"data":{"label":"Text"},"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_00831FAC_0ECB_7A81_418F_A21EA2A8CB7D"],"class":"HotspotPanoramaOverlay","id":"overlay_0083FFAD_0ECB_7A83_4191_387F22B41131"},{"areas":["this.HotspotPanoramaOverlayArea_02689936_0F08_7FCB_4167_0EBAEEDBFE1D"],"maps":[],"enabledInCardboard":true,"data":{"label":"211010---Flinti_Logo_Original"},"useHandCursor":true,"items":[{"distance":50,"yaw":-121.96,"pitch":12.55,"hfov":6.5,"vfov":9.07,"verticalAlign":"middle","horizontalAlign":"center","data":{"label":"211010---Flinti_Logo_Original"},"image":"this.res_0117A759_0F08_7246_419D_869732A0D349","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_02BD58AF_0F08_7EDA_4194_198B4A89BC26"},{"areas":["this.HotspotPanoramaOverlayArea_2246FCF4_2D79_E13C_41C1_49A5F8663436"],"maps":[],"enabledInCardboard":true,"data":{"label":"Text"},"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_22506CE5_2D79_E15D_41AD_E47A7CFDA3FC"],"class":"HotspotPanoramaOverlay","id":"overlay_224A6CE5_2D79_E15D_41BD_75E5C18AE202"},{"areas":["this.HotspotPanoramaOverlayArea_2303A5F0_2D89_6333_41A2_0EBD7F16F5B3"],"maps":[],"enabledInCardboard":true,"data":{"label":"ARTIFICiAL_issue_1_2"},"useHandCursor":true,"items":[{"distance":50,"yaw":-90.77,"pitch":7.22,"hfov":20.84,"vfov":25.37,"verticalAlign":"middle","horizontalAlign":"center","data":{"label":"ARTIFICiAL_issue_1_2"},"image":"this.res_222FDB4F_2D99_276C_41B1_E6B94B609133","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_22834582_2D89_63D4_41C5_E89333D47AA5"},{"areas":["this.HotspotPanoramaOverlayArea_3DBC6DB5_2D8B_233D_41C6_8A052F407CBA"],"maps":[],"enabledInCardboard":true,"data":{"label":"Text"},"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_3DBD9DB5_2D8B_233D_41C2_F93AB3A7A935"],"class":"HotspotPanoramaOverlay","id":"overlay_3DBC2DB5_2D8B_233D_41C4_EA20CE6D7D74"},{"width":1000,"hasAudio":false,"levels":["this.videolevel_223F407F_2D99_E12C_41B5_E566687F34CC"],"height":500,"class":"VideoResource","id":"videores_0A87743E_05BB_E04A_4188_05F1E7B8063F"},{"levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_0BC55F67_05B8_60FA_4174_E9D486576BD4_0.jpg"}],"class":"ImageResource","id":"res_0BC55F67_05B8_60FA_4174_E9D486576BD4"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_03A63585_0EB7_4E83_41A3_615E9FB34C95"},{"id":"res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0","class":"ImageResource","levels":[{"height":1844,"width":1304,"class":"ImageResourceLevel","url":"media/res_01FE3A7A_0ECB_4581_4181_8BB4C87DF9F0_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_00B5C9E0_0EB6_C681_41A3_7D04B1D4D519"},{"hfov":13.61,"vfov":4.81,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_03783999_0EB6_C683_417B_D9D99DED6127","distance":50,"yaw":-90.77,"image":{"class":"ImageResource","levels":["this.imlevel_22238CC6_2D99_215C_41B3_96A733BC22DF"]},"pitch":-6.53,"horizontalAlign":"right","data":{"label":"Text"}},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_036339A6_0EB6_C681_41A2_C0311675CDB4"},{"hfov":10.22,"vfov":5.73,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_036E698A_0EB6_C686_419A_B66CF7426A38","distance":50,"yaw":-131.26,"image":{"class":"ImageResource","levels":["this.imlevel_012E29A1_0F08_7EC9_41A6_8FC32CDC7C53"]},"pitch":4.78,"horizontalAlign":"left","data":{"label":"Text"}},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_008A6FC9_0ECB_7A83_41A2_520AC7D3E70D"},{"hfov":18.54,"vfov":2.43,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_00831FAC_0ECB_7A81_418F_A21EA2A8CB7D","distance":50,"yaw":-135.39,"image":{"class":"ImageResource","levels":["this.imlevel_22756B09_2D79_20D5_41C1_5F0FF4704E16"]},"pitch":16.48,"horizontalAlign":"right","data":{"label":"Text"}},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_02689936_0F08_7FCB_4167_0EBAEEDBFE1D"},{"id":"res_0117A759_0F08_7246_419D_869732A0D349","class":"ImageResource","levels":[{"height":662,"width":662,"class":"ImageResourceLevel","url":"media/res_0117A759_0F08_7246_419D_869732A0D349_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_2246FCF4_2D79_E13C_41C1_49A5F8663436"},{"hfov":7.43,"vfov":1.84,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_22506CE5_2D79_E15D_41AD_E47A7CFDA3FC","distance":50,"yaw":-105.67,"image":{"class":"ImageResource","levels":["this.imlevel_2222FCD6_2D99_217C_417E_1E61301F425D"]},"pitch":-9.08,"horizontalAlign":"left","data":{"label":"Text"}},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_2303A5F0_2D89_6333_41A2_0EBD7F16F5B3"},{"id":"res_222FDB4F_2D99_276C_41B1_E6B94B609133","class":"ImageResource","levels":[{"height":1500,"width":1000,"class":"ImageResourceLevel","url":"media/res_222FDB4F_2D99_276C_41B1_E6B94B609133_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_3DBC6DB5_2D8B_233D_41C6_8A052F407CBA"},{"hfov":11.02,"vfov":2.99,"verticalAlign":"top","class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_3DBD9DB5_2D8B_233D_41C2_F93AB3A7A935","distance":50,"yaw":-107.88,"image":{"class":"ImageResource","levels":["this.imlevel_22228D05_2D99_20DD_419C_434DC19CA2B9"]},"pitch":-7.57,"horizontalAlign":"left","data":{"label":"Text"}},{"width":1000,"url":trans('videolevel_223F407F_2D99_E12C_41B5_E566687F34CC.url'),"framerate":24,"height":500,"posterURL":trans('videolevel_223F407F_2D99_E12C_41B5_E566687F34CC.posterURL'),"type":"video/mp4","class":"VideoResourceLevel","bitrate":900,"id":"videolevel_223F407F_2D99_E12C_41B5_E566687F34CC"},{"height":161.31,"width":458.25,"class":"ImageResourceLevel","url":trans('imlevel_22238CC6_2D99_215C_41B3_96A733BC22DF.url'),"id":"imlevel_22238CC6_2D99_215C_41B3_96A733BC22DF"},{"height":192.32,"width":343.47,"class":"ImageResourceLevel","url":trans('imlevel_012E29A1_0F08_7EC9_41A6_8FC32CDC7C53.url'),"id":"imlevel_012E29A1_0F08_7EC9_41A6_8FC32CDC7C53"},{"height":81.59,"width":626.61,"class":"ImageResourceLevel","url":trans('imlevel_22756B09_2D79_20D5_41C1_5F0FF4704E16.url'),"id":"imlevel_22756B09_2D79_20D5_41C1_5F0FF4704E16"},{"height":61.63,"width":249.24,"class":"ImageResourceLevel","url":trans('imlevel_2222FCD6_2D99_217C_417E_1E61301F425D.url'),"id":"imlevel_2222FCD6_2D99_217C_417E_1E61301F425D"},{"height":100.3,"width":370.28,"class":"ImageResourceLevel","url":trans('imlevel_22228D05_2D99_20DD_419C_434DC19CA2B9.url'),"id":"imlevel_22228D05_2D99_20DD_419C_434DC19CA2B9"}],"minWidth":20,"defaultVRPointer":"laser","menu":["this.TDVAuthor"],"borderRadius":0,"backgroundColorRatios":[0],"width":"100%","verticalAlign":"top","scripts":{"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"translate":TDV.Tour.Script.translate,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"openLink":TDV.Tour.Script.openLink,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"downloadFile":TDV.Tour.Script.downloadFile,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"registerKey":TDV.Tour.Script.registerKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"existsKey":TDV.Tour.Script.existsKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playAudioList":TDV.Tour.Script.playAudioList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"initQuiz":TDV.Tour.Script.initQuiz,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPixels":TDV.Tour.Script.getPixels,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setValue":TDV.Tour.Script.setValue,"isPanorama":TDV.Tour.Script.isPanorama,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setLocale":TDV.Tour.Script.setLocale,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizStart":TDV.Tour.Script.quizStart,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeJS":TDV.Tour.Script.executeJS,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getKey":TDV.Tour.Script.getKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags},"scrollBarColor":"#000000","downloadEnabled":false,"scrollBarVisible":"rollOver","mediaActivationMode":"window","id":"rootPlayer","mouseWheelEnabled":true,"paddingLeft":0,"class":"Player","propagateClick":false,"backgroundOpacity":1,"paddingRight":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"backgroundColorDirection":"vertical","children":["this.MainViewer"],"backgroundColor":["#FFFFFF"],"backgroundPreloadEnabled":true,"overflow":"hidden","desktopMipmappingEnabled":false,"gap":10,"vrPolyfillScale":0.75,"scrollBarWidth":10,"height":"100%","scrollBarMargin":2,"borderSize":0,"layout":"absolute","start":"this.init()","paddingTop":0,"minHeight":20,"data":{"defaultLocale":"de","locales":{"de":"locale/de.txt"},"name":"Player456","textToSpeechConfig":{"rate":1,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false}},"contentOpaque":false,"shadow":false,"horizontalAlign":"left","paddingBottom":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.32.js.map
})();
//Generated with v2022.0.32, Fri Apr 15 2022