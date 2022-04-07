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
var script = {"definitions": [{"video":"this.videores_0A87743E_05BB_E04A_4188_05F1E7B8063F","loop":false,"height":500,"width":1000,"scaleMode":"fit_inside","class":"Video","id":"video_0B744D6F_05AB_E0CA_4196_5E099984E24A","thumbnailUrl":"media/video_0B744D6F_05AB_E0CA_4196_5E099984E24A_t.jpg","chromaSmoothing":0.13,"label":trans('video_0B744D6F_05AB_E0CA_4196_5E099984E24A.label'),"chromaColor":"#324E70","chromaThreshold":0.14,"data":{"label":"glitch_logo"}},{"displayPlayOverlay":true,"displayPlaybackBar":true,"clickAction":"play_pause","class":"VideoPlayer","viewerArea":"this.MainViewer","id":"MainViewerVideoPlayer"},{"items":[{"camera":"this.panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_camera","class":"PanoramaPlayListItem","media":"this.panorama_0FF52F62_05A8_E0FA_4173_830D890CA291","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","media":"this.video_0B744D6F_05AB_E0CA_4196_5E099984E24A","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_157C54A2_05D9_E07B_4167_DD71CC90BA03, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_157C54A2_05D9_E07B_4167_DD71CC90BA03, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_157C54A2_05D9_E07B_4167_DD71CC90BA03, 0)"}],"class":"PlayList","id":"playList_157C54A2_05D9_E07B_4167_DD71CC90BA03"},{"playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","borderRadius":0,"progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"toolTipTextShadowColor":"#000000","width":"100%","playbackBarHeadShadowBlurRadius":3,"progressBorderColor":"#000000","id":"MainViewer","progressBarBackgroundColor":["#3399FF"],"shadow":false,"playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"toolTipBorderSize":1,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","subtitlesFontColor":"#FFFFFF","playbackBarLeft":0,"toolTipFontWeight":"normal","toolTipPaddingTop":4,"paddingRight":0,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"toolTipHorizontalAlign":"center","toolTipShadowSpread":0,"progressBackgroundOpacity":1,"surfaceReticleOpacity":0.6,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","progressBorderSize":0,"subtitlesPaddingLeft":5,"progressHeight":10,"toolTipFontStyle":"normal","playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"playbackBarHeadShadowVerticalLength":0,"subtitlesPaddingRight":5,"progressBarBorderRadius":0,"toolTipPaddingRight":6,"toolTipTextShadowBlurRadius":3,"playbackBarHeadHeight":15,"subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadow":true,"transitionMode":"blending","playbackBarHeadBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowOpacity":0,"toolTipFontFamily":"Arial","height":"100%","playbackBarHeadShadowOpacity":0.7,"playbackBarHeight":10,"borderSize":0,"toolTipShadowVerticalLength":0,"playbackBarHeadShadowColor":"#000000","toolTipShadowOpacity":1,"playbackBarOpacity":1,"progressLeft":0,"doubleClickAction":"toggle_fullscreen","subtitlesEnabled":true,"minWidth":100,"paddingTop":0,"minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBackgroundColor":"#F6F6F6","toolTipBorderRadius":3,"playbackBarBackgroundOpacity":1,"subtitlesTop":0,"firstTransitionDuration":0,"subtitlesFontSize":"3vmin","paddingBottom":0,"toolTipFontColor":"#606060","displayTooltipInSurfaceSelection":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadOpacity":1,"subtitlesTextShadowVerticalLength":1,"subtitlesPaddingBottom":5,"progressBorderRadius":0,"subtitlesTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","playbackBarHeadBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","class":"ViewerArea","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"propagateClick":false,"toolTipOpacity":1,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionTime":2000,"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","toolTipShadowBlurRadius":3,"subtitlesTextDecoration":"none","playbackBarProgressOpacity":1,"toolTipPaddingLeft":6,"playbackBarHeadWidth":6,"subtitlesPaddingTop":5,"playbackBarProgressBorderSize":0,"playbackBarHeadBorderSize":0,"transitionDuration":500,"subtitlesGap":0,"subtitlesShadow":false,"subtitlesBackgroundColor":"#000000","playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingBottom":4,"subtitlesOpacity":1,"progressBarBorderSize":0,"progressBackgroundColorRatios":[0],"progressRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBottom":5,"displayTooltipInTouchScreens":true,"subtitlesHorizontalAlign":"center","playbackBarBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","progressOpacity":1,"progressBarBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBorderSize":0,"toolTipShadowHorizontalLength":0,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"surfaceReticleColor":"#FFFFFF"},{"thumbnailUrl":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_t.jpg","hfovMax":130,"class":"Panorama","label":trans('panorama_0FF52F62_05A8_E0FA_4173_830D890CA291.label'),"hfov":360,"vfov":57.93,"frames":[{"thumbnailUrl":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_t.jpg","front":{"class":"ImageResource","levels":[{"width":8704,"rowCount":17,"colCount":17,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/0/{row}_{column}.jpg","height":8704,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":4608,"rowCount":9,"colCount":9,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/1/{row}_{column}.jpg","height":4608,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":2560,"rowCount":5,"colCount":5,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1536,"rowCount":3,"colCount":3,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1024,"rowCount":2,"colCount":2,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":512,"rowCount":1,"colCount":1,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/f/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"right":{"class":"ImageResource","levels":[{"width":8704,"rowCount":17,"colCount":17,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/0/{row}_{column}.jpg","height":8704,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":4608,"rowCount":9,"colCount":9,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/1/{row}_{column}.jpg","height":4608,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":2560,"rowCount":5,"colCount":5,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1536,"rowCount":3,"colCount":3,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1024,"rowCount":2,"colCount":2,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":512,"rowCount":1,"colCount":1,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/r/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"back":{"class":"ImageResource","levels":[{"width":8704,"rowCount":17,"colCount":17,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/0/{row}_{column}.jpg","height":8704,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":4608,"rowCount":9,"colCount":9,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/1/{row}_{column}.jpg","height":4608,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":2560,"rowCount":5,"colCount":5,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1536,"rowCount":3,"colCount":3,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1024,"rowCount":2,"colCount":2,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":512,"rowCount":1,"colCount":1,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/b/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"left":{"class":"ImageResource","levels":[{"width":8704,"rowCount":17,"colCount":17,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/0/{row}_{column}.jpg","height":8704,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":4608,"rowCount":9,"colCount":9,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/1/{row}_{column}.jpg","height":4608,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":2560,"rowCount":5,"colCount":5,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/2/{row}_{column}.jpg","height":2560,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1536,"rowCount":3,"colCount":3,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/3/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":1024,"rowCount":2,"colCount":2,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/4/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":512,"rowCount":1,"colCount":1,"url":"media/panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_0/l/5/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Naglschmid - Home"},"overlays":["this.overlay_08D42221_05A8_2079_4193_20E08CB48162","this.overlay_1536AAB0_05A8_E056_4174_35CFAB48CFAC","this.overlay_150C7237_05DB_E05A_418C_6938593CC80B"],"partial":false,"pitch":0,"id":"panorama_0FF52F62_05A8_E0FA_4173_830D890CA291"},{"zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"arrowKeysAction":"translate","aaEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation"},{"initialPosition":{"yaw":-129.82,"class":"PanoramaCameraPosition","pitch":-0.03},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_0FF52F62_05A8_E0FA_4173_830D890CA291_camera"},{"class":"PlayerMenuItem","label":"Matthias Naglschmid","id":"TDVAuthor"},{"width":1000,"hasAudio":false,"levels":["this.videolevel_157453D7_05D9_E7DA_4182_D65247AB83DF"],"height":500,"class":"VideoResource","id":"videores_0A87743E_05BB_E04A_4188_05F1E7B8063F"},{"videoVisibleOnStop":false,"useHandCursor":true,"autoplay":true,"vertices":[{"yaw":-167.92,"class":"PanoramaPoint","pitch":21.92},{"yaw":-107.7,"class":"PanoramaPoint","pitch":22.2},{"yaw":-107.89,"class":"PanoramaPoint","pitch":-3.86},{"yaw":-167.42,"class":"PanoramaPoint","pitch":-3.9}],"enabledInCardboard":true,"loop":true,"cues":[],"chromaThreshold":0.14,"image":"this.res_0BC55F67_05B8_60FA_4174_E9D486576BD4","class":"QuadVideoPanoramaOverlay","id":"overlay_08D42221_05A8_2079_4193_20E08CB48162","distance":50,"chromaSmoothing":0.13,"video":"this.videores_0A87743E_05BB_E04A_4188_05F1E7B8063F","chromaColor":"#324E70","data":{"hasAudio":false,"label":"Video"}},{"areas":["this.HotspotPanoramaOverlayArea_0B607B3D_05A8_E04E_418A_07DE15159CEE"],"maps":[],"enabledInCardboard":true,"data":{"label":"ARTIFICiAL_DARK_WHITE_PROMO"},"useHandCursor":true,"items":[{"distance":50,"yaw":-112.59,"pitch":0.28,"hfov":27.1,"vfov":23.82,"verticalAlign":"middle","horizontalAlign":"center","data":{"label":"ARTIFICiAL_DARK_WHITE_PROMO"},"image":"this.res_14B0F77B_05A8_E0CA_4174_D7AC3B0222FF","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_1536AAB0_05A8_E056_4174_35CFAB48CFAC"},{"areas":["this.HotspotPanoramaOverlayArea_15EE82C4_05DB_E03E_418F_10EA5310D02E"],"maps":[],"enabledInCardboard":true,"data":{"label":"motto"},"useHandCursor":true,"items":[{"distance":50,"yaw":-112.85,"pitch":-12.51,"hfov":19.23,"vfov":9.03,"verticalAlign":"middle","horizontalAlign":"center","data":{"label":"motto"},"image":"this.res_1572A185_05D9_E039_418D_2F4196EA7172","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_150C7237_05DB_E05A_418C_6938593CC80B"},{"width":1000,"url":trans('videolevel_157453D7_05D9_E7DA_4182_D65247AB83DF.url'),"framerate":24,"height":500,"posterURL":trans('videolevel_157453D7_05D9_E7DA_4182_D65247AB83DF.posterURL'),"type":"video/mp4","class":"VideoResourceLevel","bitrate":900,"id":"videolevel_157453D7_05D9_E7DA_4182_D65247AB83DF"},{"levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_0BC55F67_05B8_60FA_4174_E9D486576BD4_0.jpg"}],"class":"ImageResource","id":"res_0BC55F67_05B8_60FA_4174_E9D486576BD4"},{"click":"this.openLink(this.translate('LinkBehaviour_14BD3EE0_05D8_E1F6_4192_2DB4F865D6CC.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_0B607B3D_05A8_E04E_418A_07DE15159CEE"},{"id":"res_14B0F77B_05A8_E0CA_4174_D7AC3B0222FF","class":"ImageResource","levels":[{"height":2458,"width":1737,"class":"ImageResourceLevel","url":"media/res_14B0F77B_05A8_E0CA_4174_D7AC3B0222FF_0.png"}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_15EE82C4_05DB_E03E_418F_10EA5310D02E"},{"id":"res_1572A185_05D9_E039_418D_2F4196EA7172","class":"ImageResource","levels":[{"height":87,"width":1135,"class":"ImageResourceLevel","url":"media/res_1572A185_05D9_E039_418D_2F4196EA7172_0.png"}]}],"minWidth":20,"menu":["this.TDVAuthor"],"borderRadius":0,"backgroundColorRatios":[0],"width":"100%","verticalAlign":"top","scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"translate":TDV.Tour.Script.translate,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentByName":TDV.Tour.Script.getComponentByName,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMapLocation":TDV.Tour.Script.setMapLocation,"historyGoForward":TDV.Tour.Script.historyGoForward,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowScore":TDV.Tour.Script.quizShowScore,"isPanorama":TDV.Tour.Script.isPanorama,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizStart":TDV.Tour.Script.quizStart,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPixels":TDV.Tour.Script.getPixels,"showWindow":TDV.Tour.Script.showWindow,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setLocale":TDV.Tour.Script.setLocale,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"existsKey":TDV.Tour.Script.existsKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setValue":TDV.Tour.Script.setValue,"cloneCamera":TDV.Tour.Script.cloneCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getKey":TDV.Tour.Script.getKey,"registerKey":TDV.Tour.Script.registerKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeJS":TDV.Tour.Script.executeJS,"getOverlays":TDV.Tour.Script.getOverlays},"scrollBarColor":"#000000","downloadEnabled":false,"scrollBarVisible":"rollOver","mediaActivationMode":"window","id":"rootPlayer","mouseWheelEnabled":true,"paddingLeft":0,"class":"Player","propagateClick":false,"defaultVRPointer":"laser","backgroundOpacity":1,"paddingRight":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"scrollBarOpacity":0.5,"backgroundColorDirection":"vertical","children":["this.MainViewer"],"backgroundColor":["#FFFFFF"],"backgroundPreloadEnabled":true,"overflow":"hidden","desktopMipmappingEnabled":false,"gap":10,"scrollBarWidth":10,"vrPolyfillScale":0.75,"height":"100%","scrollBarMargin":2,"borderSize":0,"layout":"absolute","start":"this.init()","paddingTop":0,"minHeight":20,"data":{"defaultLocale":"de","locales":{"de":"locale/de.txt"},"name":"Player456","textToSpeechConfig":{"rate":1,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false}},"contentOpaque":false,"shadow":false,"horizontalAlign":"left","paddingBottom":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.32.js.map
})();
//Generated with v2022.0.32, Thu Apr 7 2022