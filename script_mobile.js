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
    var d = {"minWidth":20,"class":"Player","data":{"name":"Player615","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"pitch":1,"speechOnTooltip":false,"rate":1},"defaultLocale":"de"},"scrollBarMargin":2,"children":["this.MainViewer_mobile"],"width":"100%","backgroundColorDirection":"vertical","gap":10,"backgroundColorRatios":[0],"propagateClick":false,"scrollBarWidth":10,"paddingTop":0,"overflow":"hidden","id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"defaultVRPointer":"laser","scrollBarOpacity":0.5,"scripts":{"translate":TDV.Tour.Script.translate,"quizFinish":TDV.Tour.Script.quizFinish,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playAudioList":TDV.Tour.Script.playAudioList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getKey":TDV.Tour.Script.getKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"clone":TDV.Tour.Script.clone,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"registerKey":TDV.Tour.Script.registerKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"init":TDV.Tour.Script.init,"textToSpeech":TDV.Tour.Script.textToSpeech,"existsKey":TDV.Tour.Script.existsKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"historyGoBack":TDV.Tour.Script.historyGoBack,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMainViewer":TDV.Tour.Script.getMainViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"shareSocial":TDV.Tour.Script.shareSocial,"quizStart":TDV.Tour.Script.quizStart,"initAnalytics":TDV.Tour.Script.initAnalytics,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initQuiz":TDV.Tour.Script.initQuiz,"getPixels":TDV.Tour.Script.getPixels,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"showWindow":TDV.Tour.Script.showWindow,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"mixObject":TDV.Tour.Script.mixObject,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList},"scrollBarColor":"#000000","height":"100%","verticalAlign":"top","backgroundColor":["#000000"],"layout":"absolute","mediaActivationMode":"window","vrPolyfillScale":0.75,"downloadEnabled":false,"borderRadius":0,"backgroundPreloadEnabled":true,"scrollBarVisible":"rollOver","backgroundOpacity":1,"desktopMipmappingEnabled":false,"contentOpaque":false,"borderSize":0,"start":"this.init()","shadow":false,"minHeight":20,"definitions": [{"hfovMax":130,"label":trans('panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9.label'),"frames":[{"back":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/b/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":8192,"tags":"ondemand"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/b/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":4096,"tags":"ondemand"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/b/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/b/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/b/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"]}],"class":"ImageResource"},"front":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/f/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":8192,"tags":"ondemand"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/f/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":4096,"tags":"ondemand"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/f/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/f/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/f/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"]}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_t.jpg","left":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/l/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":8192,"tags":"ondemand"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/l/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":4096,"tags":"ondemand"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/l/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/l/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/l/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"]}],"class":"ImageResource"},"right":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/r/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":8192,"tags":"ondemand"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/r/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":4096,"tags":"ondemand"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/r/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/r/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_0/r/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"]}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_t.jpg","class":"Panorama","vfov":62.32,"hfov":360,"partial":false,"overlays":["this.overlay_724E20AA_614E_C0D1_41D6_2B1E6D7B5E2D","this.overlay_7549DFD0_614A_4072_41D6_1E79903C527A","this.overlay_720E866F_614E_402F_41AF_9C695D3E48EE"],"data":{"subtitle":trans('panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9.subtitle','panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9.data.subtitle'),"label":"Naglschmid Store"},"pitch":0,"id":"panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9"},{"class":"ViewerArea","subtitlesEnabled":true,"toolTipPaddingRight":3,"playbackBarProgressBorderRadius":0,"playbackBarBottom":5,"subtitlesPaddingTop":5,"toolTipOpacity":1,"translationTransitionDuration":1000,"width":"100%","id":"MainViewer_mobile","subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"paddingLeft":0,"vrPointerSelectionColor":"#FF6600","paddingRight":0,"toolTipHorizontalAlign":"center","subtitlesFontWeight":"normal","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesShadow":false,"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowBlurRadius":1.5,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"transitionDuration":500,"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"height":"100%","toolTipPaddingBottom":2,"subtitlesTextDecoration":"none","toolTipBorderSize":1,"playbackBarHeadBackgroundColorRatios":[0,1],"borderRadius":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingTop":2,"progressRight":0,"progressOpacity":1,"subtitlesGap":0,"progressBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderRadius":0,"toolTipDisplayTime":600,"borderSize":0,"toolTipShadowOpacity":1,"progressBarBackgroundColorRatios":[0],"minWidth":50,"progressBarBorderColor":"#000000","minHeight":25,"progressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333333","toolTipShadowSpread":0,"toolTipBorderRadius":1,"doubleClickAction":"toggle_fullscreen","firstTransitionDuration":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderSize":0,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"progressBorderColor":"#000000","propagateClick":false,"playbackBarProgressOpacity":1,"subtitlesPaddingLeft":5,"playbackBarHeadOpacity":1,"paddingTop":0,"toolTipPaddingLeft":3,"surfaceReticleOpacity":0.6,"progressBarOpacity":1,"playbackBarHeight":10,"subtitlesBottom":50,"playbackBarHeadHeight":15,"paddingBottom":0,"subtitlesHorizontalAlign":"center","toolTipTextShadowBlurRadius":1,"subtitlesVerticalAlign":"bottom","toolTipFontWeight":"normal","progressHeight":10,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","displayTooltipInTouchScreens":true,"progressBorderSize":0,"toolTipBorderColor":"#767676","progressBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"progressBarBorderRadius":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressBackgroundOpacity":1,"toolTipShadowBlurRadius":1,"progressBottom":0,"playbackBarOpacity":1,"playbackBarHeadShadowColor":"#000000","progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"subtitlesOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","subtitlesFontSize":"3vmin","playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","subtitlesPaddingBottom":5,"playbackBarHeadWidth":6,"subtitlesPaddingRight":5,"transitionMode":"blending","vrPointerColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"vrPointerSelectionTime":2000,"toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","progressBorderRadius":0,"progressLeft":0,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderSize":0,"toolTipFontStyle":"normal","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundColorDirection":"vertical","subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","displayTooltipInSurfaceSelection":true,"playbackBarHeadShadowHorizontalLength":0,"playbackBarRight":0,"toolTipShadowHorizontalLength":0,"shadow":false,"data":{"name":"Main Viewer"}},{"displayPlaybackBar":true,"class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer_mobile","zoomEnabled":true,"arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_camera"},{"items":[{"camera":"this.panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9_camera","class":"PanoramaPlayListItem","media":"this.panorama_6CD2625F_614A_406F_41AC_01321B6AFFB9","player":"this.MainViewer_mobilePanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","class":"VideoPlayListItem","player":"this.MainViewer_mobileVideoPlayer","media":"this.video_73AFFB48_6176_C051_41A7_647BF05F66DF","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_74BCFD0B_61BA_41D7_41D4_1305D94F9A94, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_74BCFD0B_61BA_41D7_41D4_1305D94F9A94, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_74BCFD0B_61BA_41D7_41D4_1305D94F9A94, 0)"}],"class":"PlayList","id":"playList_74BCFD0B_61BA_41D7_41D4_1305D94F9A94"},{"clickAction":"play_pause","class":"VideoPlayer","displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","displayPlayOverlay":true,"id":"MainViewer_mobileVideoPlayer"},{"video":{"height":1080,"width":1440,"levels":[{"width":1440,"framerate":30,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.m3u8","class":"VideoResourceLevel","height":1080,"posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","type":"application/x-mpegurl","bitrate":1057},{"width":1440,"framerate":30,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.mp4","class":"VideoResourceLevel","height":1080,"posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","type":"video/mp4","bitrate":1057}],"class":"VideoResource"},"autoplay":true,"chromaSmoothing":0.27,"class":"Video","loop":false,"thumbnailUrl":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_t.jpg","chromaColor":"#FDFDFD","height":1080,"width":1440,"chromaThreshold":0.01,"label":trans('video_73AFFB48_6176_C051_41A7_647BF05F66DF.label'),"id":"video_73AFFB48_6176_C051_41A7_647BF05F66DF","data":{"label":"mantra"},"scaleMode":"fit_inside"},{"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"],"items":[{"distance":50,"vertices":[{"yaw":-177.82,"pitch":18.9,"class":"PanoramaPoint"},{"yaw":-162.44,"pitch":17.88,"class":"PanoramaPoint"},{"yaw":-162.42,"pitch":-3.54,"class":"PanoramaPoint"},{"yaw":-177.84,"pitch":-3.65,"class":"PanoramaPoint"}],"image":"this.res_72CF44D0_615E_C071_41C4_E097EEF9FD6D","data":{"label":"kelpwald"},"class":"QuadHotspotPanoramaOverlayImage"}],"data":{"label":"kelpwald"},"id":"overlay_724E20AA_614E_C0D1_41D6_2B1E6D7B5E2D"},{"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_754F2FD0_614A_4072_41B1_E61B965A745A"],"items":[{"distance":50,"vertices":[{"yaw":65.42,"pitch":-22.79,"class":"PanoramaPoint"},{"yaw":67.73,"pitch":-23.02,"class":"PanoramaPoint"},{"yaw":67.67,"pitch":-25.08,"class":"PanoramaPoint"},{"yaw":65.46,"pitch":-24.7,"class":"PanoramaPoint"}],"image":"this.res_72B889C5_614A_4053_41B6_63F1B31D39B3","data":{"label":"Logo"},"class":"QuadHotspotPanoramaOverlayImage"}],"data":{"label":"Logo"},"id":"overlay_7549DFD0_614A_4072_41D6_1E79903C527A"},{"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_720F466F_614E_402F_418B_04997354AE20"],"items":[{"distance":50,"vertices":[{"yaw":54.3,"pitch":24.72,"class":"PanoramaPoint"},{"yaw":80.39,"pitch":29.47,"class":"PanoramaPoint"},{"yaw":80.34,"pitch":26.6,"class":"PanoramaPoint"},{"yaw":54.24,"pitch":22.14,"class":"PanoramaPoint"}],"image":"this.res_7483C52F_61BA_402F_41D1_3F476EC932A1","data":{"label":"Cryptoshells_Font"},"class":"QuadHotspotPanoramaOverlayImage"}],"data":{"label":"Cryptoshells_Font"},"id":"overlay_720E866F_614E_402F_41AF_9C695D3E48EE"},{"id":"HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F","click":"this.openLink(this.translate('LinkBehaviour_75B7F774_6156_4031_41C6_E09B05748A96.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"height":1131,"width":800,"url":"media/res_72CF44D0_615E_C071_41C4_E097EEF9FD6D_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_72CF44D0_615E_C071_41C4_E097EEF9FD6D"},{"id":"HotspotPanoramaOverlayArea_754F2FD0_614A_4072_41B1_E61B965A745A","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"height":165,"width":165,"url":"media/res_72B889C5_614A_4053_41B6_63F1B31D39B3_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_72B889C5_614A_4053_41B6_63F1B31D39B3"},{"id":"HotspotPanoramaOverlayArea_720F466F_614E_402F_418B_04997354AE20","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"height":150,"width":1500,"url":"media/res_7483C52F_61BA_402F_41D1_3F476EC932A1_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_7483C52F_61BA_402F_41D1_3F476EC932A1"}]};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Sat Nov 27 2021