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
    var d = {"scrollBarVisible":"rollOver","menu":["this.TDVAuthor"],"contentOpaque":false,"gap":10,"width":"100%","scrollBarMargin":2,"shadow":false,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","backgroundColorRatios":[0],"paddingBottom":0,"paddingLeft":0,"scrollBarWidth":10,"scripts":{"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initAnalytics":TDV.Tour.Script.initAnalytics,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getKey":TDV.Tour.Script.getKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizStart":TDV.Tour.Script.quizStart,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"openLink":TDV.Tour.Script.openLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizFinish":TDV.Tour.Script.quizFinish,"init":TDV.Tour.Script.init,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"registerKey":TDV.Tour.Script.registerKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"mixObject":TDV.Tour.Script.mixObject,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"clone":TDV.Tour.Script.clone,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"initQuiz":TDV.Tour.Script.initQuiz,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneCamera":TDV.Tour.Script.cloneCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getComponentByName":TDV.Tour.Script.getComponentByName,"setValue":TDV.Tour.Script.setValue,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showWindow":TDV.Tour.Script.showWindow,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPixels":TDV.Tour.Script.getPixels,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"existsKey":TDV.Tour.Script.existsKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowScore":TDV.Tour.Script.quizShowScore,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"shareSocial":TDV.Tour.Script.shareSocial},"paddingRight":0,"definitions": [{"class":"PhotoAlbumPlayer","viewerArea":"this.MainViewer","id":"MainViewerPhotoAlbumPlayer"},{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","media":"this.video_73AFFB48_6176_C051_41A7_647BF05F66DF","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_2B34F612_3B7E_B6E9_41AC_1603AC6C0B46, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_2B34F612_3B7E_B6E9_41AC_1603AC6C0B46, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2B34F612_3B7E_B6E9_41AC_1603AC6C0B46, 0)"}],"id":"playList_2B34F612_3B7E_B6E9_41AC_1603AC6C0B46"},{"loop":false,"class":"PhotoAlbum","label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F.label'),"data":{"label":"Fotoalbum artificial"},"playList":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_AlbumPlayList","thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_t.png","id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F"},{"hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera"},{"playbackBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","shadow":false,"vrPointerColor":"#FFFFFF","toolTipFontStyle":"normal","displayTooltipInSurfaceSelection":true,"toolTipPaddingRight":6,"translationTransitionDuration":1000,"progressLeft":0,"width":"100%","toolTipOpacity":1,"playbackBarProgressBorderColor":"#000000","subtitlesEnabled":true,"id":"MainViewer","transitionMode":"blending","propagateClick":false,"playbackBarRight":0,"toolTipHorizontalAlign":"center","paddingLeft":0,"subtitlesBorderSize":0,"playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"paddingRight":0,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderRadius":0,"playbackBarBottom":5,"subtitlesPaddingTop":5,"subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","height":"100%","playbackBarBorderSize":0,"subtitlesShadow":false,"toolTipPaddingBottom":4,"toolTipBorderSize":1,"transitionDuration":500,"toolTipPaddingTop":4,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowOpacity":1,"class":"ViewerArea","subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"borderRadius":0,"progressBackgroundColorRatios":[0],"borderSize":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesOpacity":1,"toolTipDisplayTime":600,"minWidth":100,"playbackBarHeadShadowHorizontalLength":0,"subtitlesFontWeight":"normal","minHeight":50,"progressRight":0,"doubleClickAction":"toggle_fullscreen","subtitlesTextDecoration":"none","firstTransitionDuration":0,"toolTipBorderRadius":3,"progressOpacity":1,"toolTipShadowColor":"#333333","toolTipBackgroundColor":"#F6F6F6","toolTipShadowSpread":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","toolTipShadowVerticalLength":0,"progressBarBackgroundColorDirection":"vertical","paddingTop":0,"progressBackgroundColorDirection":"vertical","subtitlesTop":0,"subtitlesTextShadowOpacity":1,"paddingBottom":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingLeft":6,"progressBarBackgroundColor":["#3399FF"],"subtitlesGap":0,"vrPointerSelectionColor":"#FF6600","toolTipTextShadowColor":"#000000","toolTipShadowHorizontalLength":0,"playbackBarHeadShadow":true,"surfaceReticleOpacity":0.6,"progressBackgroundColor":["#FFFFFF"],"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderSize":0,"toolTipFontWeight":"normal","progressBarOpacity":1,"toolTipBorderColor":"#767676","subtitlesFontColor":"#FFFFFF","displayTooltipInTouchScreens":true,"progressBottom":0,"toolTipTextShadowOpacity":0,"toolTipTextShadowBlurRadius":3,"progressBackgroundOpacity":1,"toolTipShadowBlurRadius":3,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesPaddingLeft":5,"surfaceReticleSelectionOpacity":1,"playbackBarHeadOpacity":1,"progressBorderColor":"#000000","progressBorderSize":0,"playbackBarHeadBorderRadius":0,"progressHeight":10,"progressBarBorderRadius":0,"toolTipFontColor":"#606060","playbackBarHeight":10,"playbackBarOpacity":1,"playbackBarLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","progressBarBorderSize":0,"subtitlesFontFamily":"Arial","toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"subtitlesVerticalAlign":"bottom","subtitlesPaddingRight":5,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","subtitlesHorizontalAlign":"center","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressOpacity":1,"playbackBarBorderRadius":0,"subtitlesBottom":50,"subtitlesPaddingBottom":5,"playbackBarHeadWidth":6,"progressBorderRadius":0,"playbackBarProgressBorderSize":0,"data":{"name":"Main Viewer"},"playbackBarHeadShadowColor":"#000000"},{"displayPlaybackBar":true,"id":"MainViewerVideoPlayer","displayPlayOverlay":true,"class":"VideoPlayer","viewerArea":"this.MainViewer","clickAction":"play_pause"},{"propagateClick":false,"titleFontColor":"#000000","closeButtonRollOverBorderColor":"#000000","hideEffect":{"class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},"headerPaddingLeft":10,"bodyPaddingTop":0,"titleFontFamily":"Arial","closeButtonIconWidth":20,"width":"90%","veilOpacity":0,"id":"window_342A1B3F_3B73_BD16_4190_773420F0E031","footerHeight":5,"shadow":true,"shadowColor":"#000000","toolTipHorizontalAlign":"center","backgroundColorRatios":[],"paddingLeft":0,"headerBackgroundOpacity":0,"shadowBlurRadius":6,"showEffect":{"class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},"closeButtonPressedBackgroundColorRatios":[],"overflow":"scroll","paddingRight":0,"scrollBarOpacity":0.5,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"veilColorRatios":[0,1],"scrollBarWidth":10,"closeButtonRollOverBackgroundColor":[],"closeButtonPressedIconLineWidth":3,"headerPaddingTop":10,"closeButtonPressedBackgroundColor":[],"modal":true,"closeButtonBackgroundOpacity":0,"closeButtonRollOverBackgroundOpacity":0,"height":"90%","bodyBackgroundColorDirection":"vertical","backgroundColor":[],"veilHideEffect":{"class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},"headerPaddingBottom":5,"bodyBackgroundOpacity":0,"titleHorizontalAlign":"left","layout":"vertical","closeButtonBorderRadius":11,"bodyPaddingBottom":0,"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonPressedIconColor":"#FFFFFF","shadowVerticalLength":0,"headerBackgroundColorDirection":"vertical","borderRadius":5,"closeButtonIconLineWidth":2,"closeButtonRollOverBackgroundColorRatios":[],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"titlePaddingRight":5,"borderSize":0,"closeButtonRollOverIconLineWidth":2,"scrollBarVisible":"rollOver","class":"Window","minHeight":20,"contentOpaque":false,"veilShowEffect":{"class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},"closeButtonIconColor":"#B2B2B2","gap":10,"minWidth":20,"titlePaddingBottom":5,"closeButtonPressedBorderColor":"#000000","veilColor":["#000000","#000000"],"veilColorDirection":"horizontal","scrollBarMargin":2,"shadowSpread":1,"closeButtonBorderColor":"#000000","children":["this.WebFrame_2B20A650_3B7E_B76A_41C3_8E4886029EDD"],"paddingTop":0,"closeButtonPressedBackgroundOpacity":0,"closeButtonPaddingBottom":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"horizontalAlign":"center","backgroundColorDirection":"vertical","paddingBottom":0,"closeButtonPaddingLeft":0,"titlePaddingLeft":5,"shadowHorizontalLength":3,"closeButtonRollOverBorderSize":0,"bodyPaddingRight":0,"closeButtonIconHeight":20,"verticalAlign":"middle","footerBackgroundColorDirection":"vertical","headerBackgroundColorRatios":[0,0.1,1],"scrollBarColor":"#000000","headerPaddingRight":0,"closeButtonPaddingTop":0,"footerBackgroundOpacity":0,"footerBackgroundColorRatios":[0,0.9,1],"closeButtonPressedBorderSize":0,"closeButtonPaddingRight":0,"titlePaddingTop":5,"titleFontSize":"1.29vmin","headerVerticalAlign":"middle","shadowOpacity":0.5,"closeButtonBorderSize":0,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColorRatios":[],"bodyPaddingLeft":0,"data":{"name":"Window4203"},"closeButtonBackgroundColor":[],"backgroundOpacity":1},{"image":{"levels":[{"url":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"duration":5000,"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F_0.label'),"height":1132,"class":"Photo","width":800,"data":{"label":"artificial"},"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_0_t.png","id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_0"},{"vfov":62.32,"label":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.label'),"pitch":0,"class":"Panorama","overlays":["this.overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0","this.overlay_6C3E4F56_6260_0773_41B8_76F85C93723F","this.overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D","this.overlay_A79150C0_AABC_6606_41D8_559299FEAD00","this.overlay_0CB2330C_0175_F93A_4165_801599FECE81","this.overlay_0FA56748_0174_B93B_415F_00FFF73E1188","this.overlay_3754D0C5_3940_FFBA_41C5_BC08E276A737","this.overlay_3606F4D4_3B77_4B69_41BE_C64549F87ECC"],"data":{"subtitle":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.subtitle','panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.data.subtitle'),"label":"Naglschmid Store"},"partial":false,"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg","hfov":360,"hfovMax":130,"frames":[{"front":{"levels":[{"width":8192,"rowCount":16,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/0/{row}_{column}.jpg","height":8192,"class":"TiledImageResourceLevel","colCount":16},{"width":4096,"rowCount":8,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/1/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","colCount":8},{"width":2048,"rowCount":4,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/2/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":4},{"width":1024,"rowCount":2,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":2},{"width":512,"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":1}],"class":"ImageResource"},"right":{"levels":[{"width":8192,"rowCount":16,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/0/{row}_{column}.jpg","height":8192,"class":"TiledImageResourceLevel","colCount":16},{"width":4096,"rowCount":8,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/1/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","colCount":8},{"width":2048,"rowCount":4,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/2/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":4},{"width":1024,"rowCount":2,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":2},{"width":512,"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg","back":{"levels":[{"width":8192,"rowCount":16,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/0/{row}_{column}.jpg","height":8192,"class":"TiledImageResourceLevel","colCount":16},{"width":4096,"rowCount":8,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/1/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","colCount":8},{"width":2048,"rowCount":4,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/2/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":4},{"width":1024,"rowCount":2,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":2},{"width":512,"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","left":{"levels":[{"width":8192,"rowCount":16,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/0/{row}_{column}.jpg","height":8192,"class":"TiledImageResourceLevel","colCount":16},{"width":4096,"rowCount":8,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/1/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","colCount":8},{"width":2048,"rowCount":4,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/2/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":4},{"width":1024,"rowCount":2,"tags":"ondemand","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":2},{"width":512,"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":1}],"class":"ImageResource"}}],"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0"},{"image":{"levels":[{"url":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_2.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"duration":5000,"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F_2.label'),"height":566,"class":"Photo","width":400,"data":{"label":"first_snow"},"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_2_t.png","id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_2"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0","class":"PanoramaPlayListItem","camera":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera"},{"player":"this.MainViewerPhotoAlbumPlayer","media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F","class":"PhotoAlbumPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"video":{"height":1080,"width":1440,"class":"VideoResource","levels":[{"width":1440,"framerate":30,"type":"application/x-mpegurl","bitrate":1057,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.m3u8","height":1080,"class":"VideoResourceLevel","posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg"},{"width":1440,"framerate":30,"type":"video/mp4","bitrate":1057,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.mp4","height":1080,"class":"VideoResourceLevel","posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg"}]},"loop":false,"height":1080,"width":1440,"chromaSmoothing":0.27,"thumbnailUrl":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_t.jpg","chromaColor":"#FDFDFD","autoplay":true,"id":"video_73AFFB48_6176_C051_41A7_647BF05F66DF","chromaThreshold":0.01,"label":trans('video_73AFFB48_6176_C051_41A7_647BF05F66DF.label'),"class":"Video","data":{"label":"mantra"},"scaleMode":"fit_inside"},{"video":{"width":1000,"levels":[{"width":1000,"framerate":24,"type":"video/mp4","bitrate":900,"url":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.mp4","height":500,"class":"VideoResourceLevel","posterURL":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_poster.jpg"}],"hasAudio":false,"height":500,"class":"VideoResource"},"loop":false,"height":500,"width":1000,"chromaSmoothing":0.12,"thumbnailUrl":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_t.jpg","chromaColor":"#324E70","autoplay":true,"id":"video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A","chromaThreshold":0.21,"label":trans('video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.label'),"class":"Video","data":{"label":"glitch_logo"},"scaleMode":"fit_inside"},{"image":{"levels":[{"url":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_1.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"duration":5000,"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F_1.label'),"height":374,"class":"Photo","width":300,"data":{"label":"employee"},"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_1_t.png","id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_1"},{"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","aaEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"image":{"levels":[{"url":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_3.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"duration":5000,"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F_3.label'),"height":75,"class":"Photo","width":265,"data":{"label":"inspired x public"},"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_3_t.png","id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_3"},{"class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","media":"this.video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_2B34E612_3B7E_B6E9_41BB_35460DBA847C, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_2B34E612_3B7E_B6E9_41BB_35460DBA847C, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_2B34E612_3B7E_B6E9_41BB_35460DBA847C, 0)"}],"id":"playList_2B34E612_3B7E_B6E9_41BB_35460DBA847C"},{"class":"PlayerMenuItem","label":"Matthias Naglschmid","id":"TDVAuthor"},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"x":0.7,"zoomFactor":1.1,"class":"PhotoCameraPosition","y":0.5},"duration":5000,"easing":"linear","initialPosition":{"x":0.5,"zoomFactor":1,"class":"PhotoCameraPosition","y":0.5},"class":"MovementPhotoCamera","scaleMode":"fit_outside"},"media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_0"},{"class":"PhotoPlayListItem","camera":{"targetPosition":{"x":0.73,"zoomFactor":1.1,"class":"PhotoCameraPosition","y":0.31},"duration":5000,"easing":"linear","initialPosition":{"x":0.5,"zoomFactor":1,"class":"PhotoCameraPosition","y":0.5},"class":"MovementPhotoCamera","scaleMode":"fit_outside"},"media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_1"},{"class":"PhotoPlayListItem","camera":{"targetPosition":{"x":0.64,"zoomFactor":1.1,"class":"PhotoCameraPosition","y":0.74},"duration":5000,"easing":"linear","initialPosition":{"x":0.5,"zoomFactor":1,"class":"PhotoCameraPosition","y":0.5},"class":"MovementPhotoCamera","scaleMode":"fit_outside"},"media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_2"},{"class":"PhotoPlayListItem","camera":{"targetPosition":{"x":0.63,"zoomFactor":1.1,"class":"PhotoCameraPosition","y":0.41},"duration":5000,"easing":"linear","initialPosition":{"x":0.5,"zoomFactor":1,"class":"PhotoCameraPosition","y":0.5},"class":"MovementPhotoCamera","scaleMode":"fit_outside"},"media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_3"}],"id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_AlbumPlayList"},{"width":"100%","shadow":false,"paddingTop":0,"id":"WebFrame_2B20A650_3B7E_B76A_41C3_8E4886029EDD","scrollEnabled":true,"backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","backgroundColorRatios":[],"paddingBottom":0,"paddingLeft":0,"paddingRight":0,"height":"100%","backgroundColor":[],"insetBorder":false,"class":"WebFrame","borderRadius":0,"borderSize":0,"data":{"name":"WebFrame4780"},"minWidth":0,"propagateClick":false,"backgroundOpacity":1,"minHeight":0},{"items":[{"image":"this.res_72CF44D0_615E_C071_41C4_E097EEF9FD6D","distance":50,"vertices":[{"yaw":-177.82,"class":"PanoramaPoint","pitch":18.9},{"yaw":-162.44,"class":"PanoramaPoint","pitch":17.88},{"yaw":-162.42,"class":"PanoramaPoint","pitch":-3.54},{"yaw":-177.84,"class":"PanoramaPoint","pitch":-3.65}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"kelpwald"}}],"maps":[],"data":{"label":"kelpwald"},"areas":["this.HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","id":"overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0"},{"items":[{"vertices":[{"yaw":-161.4,"class":"PanoramaPoint","pitch":17.71},{"yaw":-154.8,"class":"PanoramaPoint","pitch":16.8},{"yaw":-154.9,"class":"PanoramaPoint","pitch":7.6},{"yaw":-161.26,"class":"PanoramaPoint","pitch":8.21}],"image":{"class":"ImageResource","levels":[{"height":314,"width":221,"class":"ImageResourceLevel","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_pkzp3yon.png"}]},"distance":50,"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Text"}}],"maps":[],"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"],"useHandCursor":false,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","id":"overlay_6C3E4F56_6260_0773_41B8_76F85C93723F"},{"items":[{"image":"this.res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B","distance":50,"vertices":[{"yaw":54.5,"class":"PanoramaPoint","pitch":24.85},{"yaw":79.47,"class":"PanoramaPoint","pitch":29.35},{"yaw":79.73,"class":"PanoramaPoint","pitch":-29.21},{"yaw":54.5,"class":"PanoramaPoint","pitch":-25.15}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Cryptoshells_Collection"}}],"maps":[],"data":{"label":"Cryptoshells_Collection"},"areas":["this.HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","id":"overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D"},{"video":{"width":1000,"levels":[{"width":1000,"framerate":24,"type":"video/mp4","bitrate":900,"url":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.mp4","height":500,"class":"VideoResourceLevel","posterURL":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_poster.jpg"}],"hasAudio":false,"height":500,"class":"VideoResource"},"loop":true,"vertices":[{"yaw":-30.45,"class":"PanoramaPoint","pitch":22.8},{"yaw":29.4,"class":"PanoramaPoint","pitch":22.8},{"yaw":28.72,"class":"PanoramaPoint","pitch":-5.21},{"yaw":-30.49,"class":"PanoramaPoint","pitch":-5.11}],"useHandCursor":true,"chromaColor":"#324E70","autoplay":true,"cues":[],"id":"overlay_A79150C0_AABC_6606_41D8_559299FEAD00","image":"this.res_A772D529_AAAC_AE06_41E4_258F3A1FB62E","distance":50,"chromaSmoothing":0.12,"chromaThreshold":0.21,"class":"QuadVideoPanoramaOverlay","videoVisibleOnStop":false,"data":{"hasAudio":false,"label":"Logo"},"enabledInCardboard":true},{"items":[{"image":"this.res_0E3D8ECC_017C_8B3B_4140_F94767728954","distance":50,"yaw":-98.25,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","hfov":36.44,"data":{"label":"artificial"},"vfov":37.17,"verticalAlign":"middle","pitch":-2.21,"scaleMode":"fit_inside"}],"maps":[],"data":{"label":"artificial"},"areas":["this.HotspotPanoramaOverlayArea_0CE113A8_0175_F97A_415C_E0559BAA8ADC"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","id":"overlay_0CB2330C_0175_F93A_4165_801599FECE81"},{"items":[{"vfov":2.06,"image":{"class":"ImageResource","levels":[{"height":69,"width":980,"class":"ImageResourceLevel","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_lr6h4ncf.png"}]},"distance":50,"yaw":-27.09,"pitch":-10.6,"horizontalAlign":"left","class":"HotspotPanoramaOverlayImage","hfov":28.66,"verticalAlign":"top"}],"maps":[],"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_0E74F7B6_0174_B956_4145_374F96D96866"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","id":"overlay_0FA56748_0174_B93B_415F_00FFF73E1188"},{"items":[{"image":"this.res_37886BE6_3940_6146_41BE_5C5BB0EAEC1D","distance":50,"vertices":[{"yaw":164.63,"class":"PanoramaPoint","pitch":-18.22},{"yaw":173.38,"class":"PanoramaPoint","pitch":-17.34},{"yaw":176.31,"class":"PanoramaPoint","pitch":-27.93},{"yaw":165.47,"class":"PanoramaPoint","pitch":-29.74}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"first_snow"}}],"maps":[],"data":{"label":"first_snow"},"areas":["this.HotspotPanoramaOverlayArea_375B80C5_3940_FFBA_41B4_D12D5717488F"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_3754D0C5_3940_FFBA_41C5_BC08E276A737"},{"items":[{"image":"this.res_3413BA10_3B72_DEEA_41C4_7C25D26DBA50","distance":50,"yaw":5.77,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","hfov":12.97,"data":{"label":"motto"},"vfov":1.88,"verticalAlign":"middle","pitch":5.37,"scaleMode":"fit_inside"}],"maps":[],"data":{"label":"motto"},"areas":["this.HotspotPanoramaOverlayArea_37924541_3B77_B56A_41C8_2681DAAD0677"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","id":"overlay_3606F4D4_3B77_4B69_41BE_C64549F87ECC"},{"class":"ImageResource","levels":[{"height":1131,"width":800,"class":"ImageResourceLevel","url":"media/res_72CF44D0_615E_C071_41C4_E097EEF9FD6D_0.png"}],"id":"res_72CF44D0_615E_C071_41C4_E097EEF9FD6D"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_75B7F774_6156_4031_41C6_E09B05748A96.source'), '_blank')","id":"HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"},{"class":"ImageResource","levels":[{"height":2000,"width":1000,"class":"ImageResourceLevel","url":"media/res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B_0.png"}],"id":"res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_0EA6B539_017C_995D_4144_21B8507C7EE4.source'), '_blank')","id":"HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"},{"class":"ImageResource","levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_A772D529_AAAC_AE06_41E4_258F3A1FB62E_0.jpg"}],"id":"res_A772D529_AAAC_AE06_41E4_258F3A1FB62E"},{"class":"ImageResource","levels":[{"height":1132,"width":800,"class":"ImageResourceLevel","url":"media/res_0E3D8ECC_017C_8B3B_4140_F94767728954_0.png"}],"id":"res_0E3D8ECC_017C_8B3B_4140_F94767728954"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_0CE113A8_0175_F97A_415C_E0559BAA8ADC"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_0E74F7B6_0174_B956_4145_374F96D96866"},{"class":"ImageResource","levels":[{"height":566,"width":400,"class":"ImageResourceLevel","url":"media/res_37886BE6_3940_6146_41BE_5C5BB0EAEC1D_0.png"}],"id":"res_37886BE6_3940_6146_41BE_5C5BB0EAEC1D"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.WebFrame_2B20A650_3B7E_B76A_41C3_8E4886029EDD.set('url', this.translate('PopupWebFrameBehaviour_34204B30_3B73_BD29_41BE_A007769A8B86.url')); this.showWindow(this.window_342A1B3F_3B73_BD16_4190_773420F0E031, null, false)","id":"HotspotPanoramaOverlayArea_375B80C5_3940_FFBA_41B4_D12D5717488F"},{"class":"ImageResource","levels":[{"height":31,"width":400,"class":"ImageResourceLevel","url":"media/res_3413BA10_3B72_DEEA_41C4_7C25D26DBA50_0.png"}],"id":"res_3413BA10_3B72_DEEA_41C4_7C25D26DBA50"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_37924541_3B77_B56A_41C8_2681DAAD0677"}],"overflow":"hidden","children":["this.MainViewer"],"scrollBarOpacity":0.5,"vrPolyfillScale":0.75,"scrollBarColor":"#000000","height":"100%","verticalAlign":"top","backgroundColor":["#000000"],"backgroundPreloadEnabled":true,"mediaActivationMode":"window","layout":"absolute","defaultVRPointer":"laser","downloadEnabled":false,"mobileMipmappingEnabled":false,"class":"Player","start":"this.init()","borderRadius":0,"desktopMipmappingEnabled":false,"borderSize":0,"data":{"defaultLocale":"de","name":"Player615","textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"rate":1},"locales":{"de":"locale/de.txt"}},"minWidth":20,"propagateClick":false,"backgroundOpacity":1,"minHeight":20};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Sat Jan 8 2022