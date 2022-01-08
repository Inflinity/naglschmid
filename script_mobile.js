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
    var d = {"minWidth":20,"data":{"name":"Player615","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"defaultLocale":"de"},"class":"Player","scrollBarMargin":2,"children":["this.MainViewer_mobile"],"width":"100%","backgroundColorDirection":"vertical","gap":10,"backgroundColorRatios":[0],"propagateClick":false,"scrollBarWidth":10,"paddingTop":0,"overflow":"hidden","id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"scripts":{"showPopupImage":TDV.Tour.Script.showPopupImage,"translate":TDV.Tour.Script.translate,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getKey":TDV.Tour.Script.getKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"textToSpeech":TDV.Tour.Script.textToSpeech,"init":TDV.Tour.Script.init,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"existsKey":TDV.Tour.Script.existsKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getOverlays":TDV.Tour.Script.getOverlays,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"downloadFile":TDV.Tour.Script.downloadFile,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showWindow":TDV.Tour.Script.showWindow,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPixels":TDV.Tour.Script.getPixels,"shareSocial":TDV.Tour.Script.shareSocial,"cloneCamera":TDV.Tour.Script.cloneCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setLocale":TDV.Tour.Script.setLocale,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMainViewer":TDV.Tour.Script.getMainViewer,"setValue":TDV.Tour.Script.setValue,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initQuiz":TDV.Tour.Script.initQuiz,"quizStart":TDV.Tour.Script.quizStart,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizFinish":TDV.Tour.Script.quizFinish,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"registerKey":TDV.Tour.Script.registerKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"mixObject":TDV.Tour.Script.mixObject,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"vrPolyfillScale":0.75,"scrollBarColor":"#000000","mobileMipmappingEnabled":false,"height":"100%","defaultVRPointer":"laser","verticalAlign":"top","backgroundColor":["#000000"],"layout":"absolute","mediaActivationMode":"window","downloadEnabled":false,"borderRadius":0,"backgroundPreloadEnabled":true,"scrollBarVisible":"rollOver","backgroundOpacity":1,"desktopMipmappingEnabled":false,"contentOpaque":false,"menu":["this.TDVAuthor"],"borderSize":0,"start":"this.init()","shadow":false,"minHeight":20,"definitions": [{"class":"PlayList","items":[{"player":"this.MainViewer_mobileVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","media":"this.video_73AFFB48_6176_C051_41A7_647BF05F66DF","class":"VideoPlayListItem","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_288199AD_3940_21CA_41C6_B3EE18D3F750, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_288199AD_3940_21CA_41C6_B3EE18D3F750, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_288199AD_3940_21CA_41C6_B3EE18D3F750, 0)"}],"id":"playList_288199AD_3940_21CA_41C6_B3EE18D3F750"},{"viewerArea":"this.MainViewer_mobile","class":"PhotoAlbumPlayer","id":"MainViewer_mobilePhotoAlbumPlayer"},{"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonPressedBackgroundColor":[],"headerBackgroundOpacity":0,"data":{"name":"Window7135"},"veilColorRatios":[0,1],"closeButtonPressedBackgroundColorRatios":[],"class":"Window","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"width":"90%","backgroundColorRatios":[],"shadowColor":"#000000","titlePaddingRight":5,"closeButtonBorderRadius":11,"closeButtonPressedIconLineWidth":3,"overflow":"scroll","id":"window_29B1C146_3940_E147_41BE_1889F208B7F7","shadowBlurRadius":6,"showEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"hideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"paddingLeft":0,"veilColorDirection":"horizontal","closeButtonPressedBorderColor":"#000000","scrollBarWidth":10,"closeButtonRollOverBackgroundOpacity":0,"paddingRight":0,"footerBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","headerBackgroundColorDirection":"vertical","closeButtonBorderColor":"#000000","modal":true,"headerPaddingBottom":5,"closeButtonRollOverBorderSize":0,"closeButtonIconLineWidth":2,"scrollBarOpacity":0.5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"titlePaddingBottom":5,"closeButtonPressedBackgroundOpacity":0,"bodyBackgroundOpacity":0,"titlePaddingLeft":5,"titleFontColor":"#000000","closeButtonRollOverBackgroundColor":[],"backgroundColor":[],"layout":"vertical","height":"90%","veilColor":["#000000","#000000"],"closeButtonRollOverBackgroundColorRatios":[],"closeButtonPaddingLeft":0,"closeButtonPressedBorderSize":0,"borderRadius":5,"closeButtonPaddingBottom":0,"closeButtonRollOverIconLineWidth":2,"footerBackgroundOpacity":0,"scrollBarVisible":"rollOver","headerBackgroundColorRatios":[0,0.1,1],"contentOpaque":false,"borderSize":0,"shadowHorizontalLength":3,"closeButtonIconColor":"#B2B2B2","minHeight":20,"closeButtonIconHeight":20,"minWidth":20,"gap":10,"scrollBarMargin":2,"shadowSpread":1,"footerBackgroundColorRatios":[0,0.9,1],"headerVerticalAlign":"middle","titlePaddingTop":5,"backgroundColorDirection":"vertical","bodyPaddingRight":0,"propagateClick":false,"closeButtonPaddingTop":0,"paddingTop":0,"horizontalAlign":"center","closeButtonPaddingRight":0,"headerPaddingRight":0,"closeButtonBackgroundColorRatios":[],"titleFontSize":"1.29vmin","paddingBottom":0,"headerPaddingLeft":10,"closeButtonBorderSize":0,"children":["this.WebFrame_289ABA82_3940_23BF_41C5_982E67563344"],"verticalAlign":"middle","shadowVerticalLength":0,"scrollBarColor":"#000000","veilHideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"closeButtonRollOverIconColor":"#FFFFFF","closeButtonRollOverBorderColor":"#000000","titleFontFamily":"Arial","veilOpacity":0.4,"closeButtonBackgroundColor":[],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"bodyPaddingLeft":0,"footerHeight":5,"shadowOpacity":0.5,"closeButtonBackgroundOpacity":0,"veilShowEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"closeButtonPressedIconColor":"#FFFFFF","closeButtonIconWidth":20,"bodyBackgroundColorDirection":"vertical","bodyPaddingTop":0,"backgroundOpacity":1,"bodyPaddingBottom":0,"shadow":true,"titleHorizontalAlign":"left","headerPaddingTop":10},{"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F.label'),"loop":false,"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_t.png","class":"PhotoAlbum","playList":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_AlbumPlayList","id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F","data":{"label":"Fotoalbum artificial"}},{"hfovMax":130,"label":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.label'),"frames":[{"back":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/b/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"front":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/f/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"right":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/r/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg","class":"CubicPanoramaFrame","left":{"levels":[{"colCount":16,"width":8192,"rowCount":16,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/0/{row}_{column}.jpg","height":8192,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":8,"width":4096,"rowCount":8,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/1/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":4,"width":2048,"rowCount":4,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/2/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":2,"width":1024,"rowCount":2,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":1,"width":512,"rowCount":1,"url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_0/l/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_t.jpg","class":"Panorama","pitch":0,"vfov":62.32,"hfov":360,"partial":false,"overlays":["this.overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0","this.overlay_6C3E4F56_6260_0773_41B8_76F85C93723F","this.overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D","this.overlay_A79150C0_AABC_6606_41D8_559299FEAD00","this.overlay_CF67A5C0_C2DE_DDDC_41BF_B4FCD780651A","this.overlay_0CB2330C_0175_F93A_4165_801599FECE81","this.overlay_0FA56748_0174_B93B_415F_00FFF73E1188","this.overlay_3754D0C5_3940_FFBA_41C5_BC08E276A737"],"data":{"subtitle":trans('panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.subtitle','panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0.data.subtitle'),"label":"Naglschmid Store"},"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0"},{"clickAction":"play_pause","displayPlayOverlay":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","class":"VideoPlayer","id":"MainViewer_mobileVideoPlayer"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera","media":"this.panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewer_mobilePhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F","class":"PhotoAlbumPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"image":{"levels":[{"url":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F_0.label'),"height":1132,"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_0_t.png","duration":5000,"width":800,"class":"Photo","data":{"label":"artificial"},"id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_0"},{"video":{"width":1000,"hasAudio":false,"height":500,"class":"VideoResource","levels":[{"width":1000,"type":"video/mp4","framerate":24,"url":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.mp4","height":500,"posterURL":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_poster.jpg","class":"VideoResourceLevel","bitrate":900}]},"autoplay":true,"chromaSmoothing":0.12,"loop":false,"thumbnailUrl":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_t.jpg","class":"Video","chromaColor":"#324E70","height":500,"width":1000,"chromaThreshold":0.21,"label":trans('video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.label'),"id":"video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A","data":{"label":"glitch_logo"},"scaleMode":"fit_inside"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_camera"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobileVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","media":"this.video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A","class":"VideoPlayListItem","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_288189AD_3940_21CA_41C3_4D3F7F28E3B7, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_288189AD_3940_21CA_41C3_4D3F7F28E3B7, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_288189AD_3940_21CA_41C3_4D3F7F28E3B7, 0)"}],"id":"playList_288189AD_3940_21CA_41C3_4D3F7F28E3B7"},{"image":{"levels":[{"url":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_1.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F_1.label'),"height":374,"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_1_t.png","duration":5000,"width":300,"class":"Photo","data":{"label":"employee"},"id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_1"},{"displayPlaybackBar":true,"arrowKeysAction":"translate","aaEnabled":true,"viewerArea":"this.MainViewer_mobile","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"video":{"height":1080,"width":1440,"class":"VideoResource","levels":[{"width":1440,"type":"application/x-mpegurl","framerate":30,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.m3u8","height":1080,"posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","class":"VideoResourceLevel"},{"width":1440,"type":"video/mp4","framerate":30,"url":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF.mp4","height":1080,"posterURL":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_poster.jpg","class":"VideoResourceLevel","bitrate":1057}]},"autoplay":true,"chromaSmoothing":0.27,"loop":false,"thumbnailUrl":"media/video_73AFFB48_6176_C051_41A7_647BF05F66DF_t.jpg","class":"Video","chromaColor":"#FDFDFD","height":1080,"width":1440,"chromaThreshold":0.01,"label":trans('video_73AFFB48_6176_C051_41A7_647BF05F66DF.label'),"id":"video_73AFFB48_6176_C051_41A7_647BF05F66DF","data":{"label":"mantra"},"scaleMode":"fit_inside"},{"class":"ViewerArea","playbackBarProgressBorderRadius":0,"playbackBarBottom":5,"toolTipPaddingRight":3,"toolTipOpacity":1,"translationTransitionDuration":1000,"width":"100%","subtitlesPaddingTop":5,"id":"MainViewer_mobile","subtitlesFontColor":"#FFFFFF","paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","subtitlesFontWeight":"normal","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesShadow":false,"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowBlurRadius":1.5,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"transitionDuration":500,"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"height":"100%","toolTipPaddingBottom":2,"subtitlesTextDecoration":"none","toolTipBorderSize":1,"playbackBarHeadBackgroundColorRatios":[0,1],"borderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingTop":2,"progressRight":0,"progressOpacity":1,"subtitlesGap":0,"progressBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderRadius":0,"toolTipDisplayTime":600,"borderSize":0,"toolTipShadowOpacity":1,"progressBarBackgroundColorRatios":[0],"minWidth":50,"progressBarBorderColor":"#000000","minHeight":25,"progressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333333","toolTipShadowSpread":0,"toolTipBorderRadius":1,"doubleClickAction":"toggle_fullscreen","firstTransitionDuration":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"progressBorderColor":"#000000","propagateClick":false,"playbackBarProgressOpacity":1,"subtitlesPaddingLeft":5,"playbackBarHeadOpacity":1,"paddingTop":0,"toolTipPaddingLeft":3,"vrPointerSelectionColor":"#FF6600","surfaceReticleOpacity":0.6,"progressBarOpacity":1,"playbackBarHeight":10,"subtitlesBottom":50,"playbackBarHeadHeight":15,"paddingBottom":0,"subtitlesHorizontalAlign":"center","toolTipTextShadowBlurRadius":1,"subtitlesVerticalAlign":"bottom","toolTipFontWeight":"normal","progressHeight":10,"surfaceReticleSelectionColor":"#FFFFFF","toolTipTextShadowColor":"#000000","displayTooltipInTouchScreens":true,"progressBorderSize":0,"toolTipBorderColor":"#767676","progressBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"progressBarBorderRadius":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressBackgroundOpacity":1,"toolTipShadowBlurRadius":1,"progressBottom":0,"playbackBarOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowColor":"#000000","progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"subtitlesOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","subtitlesFontSize":"3vmin","playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","subtitlesPaddingBottom":5,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"subtitlesPaddingRight":5,"transitionMode":"blending","playbackBarHeadShadowVerticalLength":0,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"subtitlesEnabled":true,"toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","progressBorderRadius":0,"progressLeft":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderSize":0,"toolTipFontStyle":"normal","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundColorDirection":"vertical","subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","displayTooltipInSurfaceSelection":true,"playbackBarRight":0,"toolTipShadowHorizontalLength":0,"shadow":false,"data":{"name":"Main Viewer"}},{"image":{"levels":[{"url":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_2.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F_2.label'),"height":566,"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_2_t.png","duration":5000,"width":400,"class":"Photo","data":{"label":"first_snow"},"id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_2"},{"image":{"levels":[{"url":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_3.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"label":trans('album_37B7F5E9_3941_E14A_41B6_9770801E743F_3.label'),"height":75,"thumbnailUrl":"media/album_37B7F5E9_3941_E14A_41B6_9770801E743F_3_t.png","duration":5000,"width":265,"class":"Photo","data":{"label":"inspired x public"},"id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_3"},{"class":"PlayerMenuItem","label":"Matthias Naglschmid","id":"TDVAuthor"},{"minWidth":0,"class":"WebFrame","width":"100%","insetBorder":false,"backgroundColorDirection":"vertical","backgroundColorRatios":[],"propagateClick":false,"paddingTop":0,"id":"WebFrame_289ABA82_3940_23BF_41C5_982E67563344","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":[],"scrollEnabled":true,"borderRadius":0,"backgroundOpacity":1,"borderSize":0,"shadow":false,"minHeight":0,"data":{"name":"WebFrame13254"}},{"class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"easing":"linear","initialPosition":{"zoomFactor":1,"x":0.5,"class":"PhotoCameraPosition","y":0.5},"targetPosition":{"zoomFactor":1.1,"x":0.7,"class":"PhotoCameraPosition","y":0.5},"duration":5000,"class":"MovementPhotoCamera","scaleMode":"fit_outside"},"media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_0"},{"class":"PhotoPlayListItem","camera":{"easing":"linear","initialPosition":{"zoomFactor":1,"x":0.5,"class":"PhotoCameraPosition","y":0.5},"targetPosition":{"zoomFactor":1.1,"x":0.73,"class":"PhotoCameraPosition","y":0.31},"duration":5000,"class":"MovementPhotoCamera","scaleMode":"fit_outside"},"media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_1"},{"class":"PhotoPlayListItem","camera":{"easing":"linear","initialPosition":{"zoomFactor":1,"x":0.5,"class":"PhotoCameraPosition","y":0.5},"targetPosition":{"zoomFactor":1.1,"x":0.64,"class":"PhotoCameraPosition","y":0.74},"duration":5000,"class":"MovementPhotoCamera","scaleMode":"fit_outside"},"media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_2"},{"class":"PhotoPlayListItem","camera":{"easing":"linear","initialPosition":{"zoomFactor":1,"x":0.5,"class":"PhotoCameraPosition","y":0.5},"targetPosition":{"zoomFactor":1.1,"x":0.63,"class":"PhotoCameraPosition","y":0.41},"duration":5000,"class":"MovementPhotoCamera","scaleMode":"fit_outside"},"media":"this.album_37B7F5E9_3941_E14A_41B6_9770801E743F_3"}],"id":"album_37B7F5E9_3941_E14A_41B6_9770801E743F_AlbumPlayList"},{"maps":[],"enabledInCardboard":true,"items":[{"image":"this.res_72CF44D0_615E_C071_41C4_E097EEF9FD6D","distance":50,"vertices":[{"yaw":-177.82,"class":"PanoramaPoint","pitch":18.9},{"yaw":-162.44,"class":"PanoramaPoint","pitch":17.88},{"yaw":-162.42,"class":"PanoramaPoint","pitch":-3.54},{"yaw":-177.84,"class":"PanoramaPoint","pitch":-3.65}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"kelpwald"}}],"data":{"label":"kelpwald"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"],"class":"HotspotPanoramaOverlay","id":"overlay_6DC1DC01_61E0_08D1_41B0_3A654FCCE1A0"},{"maps":[],"enabledInCardboard":true,"items":[{"vertices":[{"yaw":-161.4,"class":"PanoramaPoint","pitch":17.71},{"yaw":-154.8,"class":"PanoramaPoint","pitch":16.8},{"yaw":-154.9,"class":"PanoramaPoint","pitch":7.6},{"yaw":-161.26,"class":"PanoramaPoint","pitch":8.21}],"class":"QuadHotspotPanoramaOverlayImage","image":{"class":"ImageResource","levels":[{"height":314,"width":221,"class":"ImageResourceLevel","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_pkzp3yon.png"}]},"distance":50,"data":{"label":"Text"}}],"data":{"label":"Text"},"useHandCursor":false,"areas":["this.HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"],"class":"HotspotPanoramaOverlay","id":"overlay_6C3E4F56_6260_0773_41B8_76F85C93723F"},{"maps":[],"enabledInCardboard":true,"items":[{"image":"this.res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B","distance":50,"vertices":[{"yaw":54.5,"class":"PanoramaPoint","pitch":24.85},{"yaw":79.47,"class":"PanoramaPoint","pitch":29.35},{"yaw":79.73,"class":"PanoramaPoint","pitch":-29.21},{"yaw":54.5,"class":"PanoramaPoint","pitch":-25.15}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Cryptoshells_Collection"}}],"data":{"label":"Cryptoshells_Collection"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"],"class":"HotspotPanoramaOverlay","id":"overlay_6CDBA443_6260_1951_41BA_02D5EEA08D7D"},{"video":{"width":1000,"hasAudio":false,"height":500,"class":"VideoResource","levels":[{"width":1000,"type":"video/mp4","framerate":24,"url":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A.mp4","height":500,"posterURL":"media/video_A70E075B_AABD_AA39_41DF_BBF58CC1FD6A_poster.jpg","class":"VideoResourceLevel","bitrate":900}]},"autoplay":true,"chromaSmoothing":0.12,"loop":true,"vertices":[{"yaw":-30.55,"class":"PanoramaPoint","pitch":22.91},{"yaw":29.36,"class":"PanoramaPoint","pitch":22.93},{"yaw":28.66,"class":"PanoramaPoint","pitch":-5.08},{"yaw":-30.55,"class":"PanoramaPoint","pitch":-5.01}],"class":"QuadVideoPanoramaOverlay","useHandCursor":true,"chromaThreshold":0.21,"chromaColor":"#324E70","id":"overlay_A79150C0_AABC_6606_41D8_559299FEAD00","image":"this.res_A772D529_AAAC_AE06_41E4_258F3A1FB62E","distance":50,"videoVisibleOnStop":false,"cues":[],"enabledInCardboard":true,"data":{"hasAudio":false,"label":"Logo"}},{"maps":[],"enabledInCardboard":true,"items":[{"image":"this.res_CECDB5BB_C332_0C18_41B2_FBFEF8324E22","distance":50,"yaw":8.73,"horizontalAlign":"center","vfov":2.43,"hfov":8.59,"class":"HotspotPanoramaOverlayImage","data":{"label":"inspired x public"},"verticalAlign":"middle","pitch":7.2,"scaleMode":"fit_inside"}],"data":{"label":"inspired x public"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_CE00D62D_C2DE_DEA4_41D1_1CF4D85CC15E"],"class":"HotspotPanoramaOverlay","id":"overlay_CF67A5C0_C2DE_DDDC_41BF_B4FCD780651A"},{"maps":[],"enabledInCardboard":true,"items":[{"image":"this.res_0E3D8ECC_017C_8B3B_4140_F94767728954","distance":50,"yaw":-98.25,"horizontalAlign":"center","vfov":37.17,"hfov":36.44,"class":"HotspotPanoramaOverlayImage","data":{"label":"artificial"},"verticalAlign":"middle","pitch":-2.21,"scaleMode":"fit_inside"}],"data":{"label":"artificial"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_0CE113A8_0175_F97A_415C_E0559BAA8ADC"],"class":"HotspotPanoramaOverlay","id":"overlay_0CB2330C_0175_F93A_4165_801599FECE81"},{"maps":[],"enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","pitch":-10.6,"hfov":28.66,"distance":50,"yaw":-27.09,"image":{"class":"ImageResource","levels":[{"height":69,"width":980,"class":"ImageResourceLevel","url":"media/panorama_6DC00C01_61E0_08D1_41D0_A956CF453FC0_HS_lr6h4ncf.png"}]},"horizontalAlign":"left","vfov":2.06,"verticalAlign":"top"}],"data":{"label":"Text"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_0E74F7B6_0174_B956_4145_374F96D96866"],"class":"HotspotPanoramaOverlay","id":"overlay_0FA56748_0174_B93B_415F_00FFF73E1188"},{"maps":[],"items":[{"image":"this.res_37886BE6_3940_6146_41BE_5C5BB0EAEC1D","distance":50,"vertices":[{"yaw":164.32,"class":"PanoramaPoint","pitch":-18.35},{"yaw":173.08,"class":"PanoramaPoint","pitch":-17.47},{"yaw":176.39,"class":"PanoramaPoint","pitch":-27.63},{"yaw":165.1,"class":"PanoramaPoint","pitch":-30.16}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"first_snow"}}],"data":{"label":"first_snow"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_375B80C5_3940_FFBA_41B4_D12D5717488F"],"class":"HotspotPanoramaOverlay","id":"overlay_3754D0C5_3940_FFBA_41C5_BC08E276A737"},{"class":"ImageResource","levels":[{"height":1131,"width":800,"class":"ImageResourceLevel","url":"media/res_72CF44D0_615E_C071_41C4_E097EEF9FD6D_0.png"}],"id":"res_72CF44D0_615E_C071_41C4_E097EEF9FD6D"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_75B7F774_6156_4031_41C6_E09B05748A96.source'), '_blank')","id":"HotspotPanoramaOverlayArea_724560B9_614E_C033_41CB_D862602AAE5F"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C31AF56_6260_0773_41A4_1DE61CBD2143"},{"class":"ImageResource","levels":[{"height":2000,"width":1000,"class":"ImageResourceLevel","url":"media/res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B_0.png"}],"id":"res_6D080E08_6220_08DF_41C7_F30E2A4E2A4B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_0EA6B539_017C_995D_4144_21B8507C7EE4.source'), '_blank')","id":"HotspotPanoramaOverlayArea_6CDAF443_6260_1951_41D8_99A36C059413"},{"class":"ImageResource","levels":[{"height":500,"width":1000,"class":"ImageResourceLevel","url":"media/res_A772D529_AAAC_AE06_41E4_258F3A1FB62E_0.jpg"}],"id":"res_A772D529_AAAC_AE06_41E4_258F3A1FB62E"},{"class":"ImageResource","levels":[{"height":75,"width":265,"class":"ImageResourceLevel","url":"media/res_CECDB5BB_C332_0C18_41B2_FBFEF8324E22_0.png"}],"id":"res_CECDB5BB_C332_0C18_41B2_FBFEF8324E22"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_CE00D62D_C2DE_DEA4_41D1_1CF4D85CC15E"},{"class":"ImageResource","levels":[{"height":1132,"width":800,"class":"ImageResourceLevel","url":"media/res_0E3D8ECC_017C_8B3B_4140_F94767728954_0.png"}],"id":"res_0E3D8ECC_017C_8B3B_4140_F94767728954"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_0CE113A8_0175_F97A_415C_E0559BAA8ADC"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_0E74F7B6_0174_B956_4145_374F96D96866"},{"class":"ImageResource","levels":[{"height":566,"width":400,"class":"ImageResourceLevel","url":"media/res_37886BE6_3940_6146_41BE_5C5BB0EAEC1D_0.png"}],"id":"res_37886BE6_3940_6146_41BE_5C5BB0EAEC1D"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.WebFrame_289ABA82_3940_23BF_41C5_982E67563344.set('url', this.translate('PopupWebFrameBehaviour_29B18146_3940_E147_41C8_A0A06EA2C910.url')); this.showWindow(this.window_29B1C146_3940_E147_41BE_1889F208B7F7, null, false)","id":"HotspotPanoramaOverlayArea_375B80C5_3940_FFBA_41B4_D12D5717488F"}]};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Sat Jan 8 2022