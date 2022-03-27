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
var script = {"mobileMipmappingEnabled":false,"borderSize":0,"scrollBarMargin":2,"borderRadius":0,"gap":10,"width":"100%","paddingLeft":0,"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"propagateClick":false,"paddingTop":0,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scrollBarWidth":10,"scrollBarOpacity":0.5,"horizontalAlign":"left","toolTipHorizontalAlign":"center","backgroundPreloadEnabled":true,"mediaActivationMode":"window","scripts":{"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"downloadFile":TDV.Tour.Script.downloadFile,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getKey":TDV.Tour.Script.getKey,"getOverlays":TDV.Tour.Script.getOverlays,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"openLink":TDV.Tour.Script.openLink,"cloneCamera":TDV.Tour.Script.cloneCamera,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showWindow":TDV.Tour.Script.showWindow,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMainViewer":TDV.Tour.Script.getMainViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"isPanorama":TDV.Tour.Script.isPanorama,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"resumePlayers":TDV.Tour.Script.resumePlayers,"initQuiz":TDV.Tour.Script.initQuiz,"quizFinish":TDV.Tour.Script.quizFinish,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentByName":TDV.Tour.Script.getComponentByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"historyGoBack":TDV.Tour.Script.historyGoBack,"existsKey":TDV.Tour.Script.existsKey,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setValue":TDV.Tour.Script.setValue,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPixels":TDV.Tour.Script.getPixels,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"translate":TDV.Tour.Script.translate,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour},"backgroundOpacity":1,"paddingRight":0,"downloadEnabled":false,"overflow":"hidden","scrollBarColor":"#000000","scrollBarVisible":"rollOver","backgroundColor":["#FFFFFF"],"definitions": [{"thumbnailUrl":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_t.jpg","label":trans('panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9.label'),"class":"Panorama","hfov":360,"hfovMax":130,"vfov":53.59,"data":{"label":"T0000 Panorama"},"frames":[{"front":{"levels":[{"width":8192,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/f/0/{row}_{column}.jpg","colCount":16,"height":8192,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":16},{"width":4096,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/f/1/{row}_{column}.jpg","colCount":8,"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8},{"width":2048,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/f/2/{row}_{column}.jpg","colCount":4,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":1024,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/f/3/{row}_{column}.jpg","colCount":2,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":512,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/f/4/{row}_{column}.jpg","colCount":1,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_t.jpg","right":{"levels":[{"width":8192,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/r/0/{row}_{column}.jpg","colCount":16,"height":8192,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":16},{"width":4096,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/r/1/{row}_{column}.jpg","colCount":8,"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8},{"width":2048,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/r/2/{row}_{column}.jpg","colCount":4,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":1024,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/r/3/{row}_{column}.jpg","colCount":2,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":512,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/r/4/{row}_{column}.jpg","colCount":1,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"back":{"levels":[{"width":8192,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/b/0/{row}_{column}.jpg","colCount":16,"height":8192,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":16},{"width":4096,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/b/1/{row}_{column}.jpg","colCount":8,"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8},{"width":2048,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/b/2/{row}_{column}.jpg","colCount":4,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":1024,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/b/3/{row}_{column}.jpg","colCount":2,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":512,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/b/4/{row}_{column}.jpg","colCount":1,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","left":{"levels":[{"width":8192,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/l/0/{row}_{column}.jpg","colCount":16,"height":8192,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":16},{"width":4096,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/l/1/{row}_{column}.jpg","colCount":8,"height":4096,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":8},{"width":2048,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/l/2/{row}_{column}.jpg","colCount":4,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":1024,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/l/3/{row}_{column}.jpg","colCount":2,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":512,"url":"media/panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_0/l/4/{row}_{column}.jpg","colCount":1,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"}}],"pitch":0,"partial":false,"id":"panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9"},{"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","surfaceSelectionEnabled":false,"zoomEnabled":true,"displayPlaybackBar":true,"aaEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"hoverFactor":0,"initialSequence":"this.sequence_C7273359_CDC0_1B1E_41E1_C70606C3786E","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9_camera","media":"this.panorama_C67549DA_CDC0_1712_41E0_9A65FA01D0D9","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"subtitlesBorderColor":"#FFFFFF","borderSize":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"borderRadius":0,"toolTipFontWeight":"normal","toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","width":"100%","paddingLeft":0,"subtitlesTextDecoration":"none","propagateClick":false,"playbackBarHeadShadowColor":"#000000","toolTipFontFamily":"Arial","subtitlesPaddingTop":5,"id":"MainViewer","playbackBarHeadBackgroundColorDirection":"vertical","toolTipDisplayTime":600,"progressLeft":0,"toolTipShadowBlurRadius":3,"subtitlesOpacity":1,"subtitlesFontFamily":"Arial","toolTipBorderRadius":3,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowOpacity":1,"paddingRight":0,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","playbackBarProgressOpacity":1,"subtitlesHorizontalAlign":"center","playbackBarHeadBorderColor":"#000000","subtitlesVerticalAlign":"bottom","height":"100%","transitionMode":"blending","toolTipTextShadowOpacity":0,"progressBackgroundOpacity":1,"subtitlesShadow":false,"playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderSize":0,"subtitlesEnabled":true,"subtitlesFontColor":"#FFFFFF","playbackBarHeadWidth":6,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","surfaceReticleColor":"#FFFFFF","playbackBarBottom":5,"class":"ViewerArea","playbackBarProgressBorderSize":0,"minHeight":50,"translationTransitionDuration":1000,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","minWidth":100,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"progressBorderRadius":0,"playbackBarRight":0,"surfaceReticleSelectionOpacity":1,"subtitlesPaddingLeft":5,"progressBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarProgressBorderRadius":0,"toolTipShadowSpread":0,"playbackBarBorderSize":0,"subtitlesBottom":50,"progressRight":0,"progressOpacity":1,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingBottom":4,"paddingTop":0,"toolTipFontSize":"1.11vmin","paddingBottom":0,"toolTipHorizontalAlign":"center","subtitlesPaddingRight":5,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","toolTipShadowVerticalLength":0,"progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipPaddingTop":4,"playbackBarHeadShadow":true,"playbackBarHeadOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"progressBorderColor":"#000000","displayTooltipInSurfaceSelection":true,"progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","toolTipFontColor":"#606060","transitionDuration":500,"displayTooltipInTouchScreens":true,"playbackBarProgressBorderColor":"#000000","progressBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","progressBarOpacity":1,"playbackBarHeadShadowOpacity":0.7,"toolTipFontStyle":"normal","toolTipTextShadowBlurRadius":3,"playbackBarOpacity":1,"vrPointerSelectionTime":2000,"progressBottom":0,"progressHeight":10,"subtitlesTop":0,"progressBorderSize":0,"subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":0,"toolTipShadowHorizontalLength":0,"playbackBarHeight":10,"progressBarBorderSize":0,"toolTipOpacity":1,"doubleClickAction":"toggle_fullscreen","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","shadow":false,"subtitlesBackgroundOpacity":0.2,"subtitlesPaddingBottom":5,"playbackBarBackgroundOpacity":1,"toolTipBorderSize":1,"data":{"name":"Main Viewer"}},{"restartMovementOnUserInteraction":false,"id":"sequence_C7273359_CDC0_1B1E_41E1_C70606C3786E","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]}],"height":"100%","children":["this.MainViewer"],"verticalAlign":"top","desktopMipmappingEnabled":false,"layout":"absolute","contentOpaque":false,"defaultVRPointer":"laser","class":"Player","start":"this.init()","minHeight":20,"vrPolyfillScale":0.75,"minWidth":20,"shadow":false,"data":{"defaultLocale":"de","name":"Player428","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.26.js.map
})();
//Generated with v2022.0.26, Sun Mar 27 2022