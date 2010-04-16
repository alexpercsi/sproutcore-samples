// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

// shows demonstration of various collection views...
SampleControls.collectionsPage = SC.Page.create({
  
  rowListView: SC.outlet('mainView.topLeftView.scrollView.contentView'),
  
  mainView: SC.View.design({
      childViews: 'scrollView'.w(), 
      scrollView: SC.ScrollView.design({
        layout: { top: 0, left: 0, width: 400, bottom: 70 },
        hasHorizontalScroller: NO,
        contentView: SC.GridView.design({
          contentValueKey: 'title',
          contentIconKey:  'icon',
          contentUnreadCountKey: 'unread',
          hasContentIcon: YES,
          contentBinding: 'SampleControls.filesController',
          canEditContent: YES,
          canDeleteContent: YES,
          canReorderContent: YES
					// rowHeight: 6,
					// exampleView: SC.ListItemView.extend({
					// 	useFactory: YES
					// })
					
					
					//,
          //selectionBinding: 'SampleControls.filesController.selection'
          // selectOnMouseDown: YES,
          // canReorderContent: YES
        })
      })
  })
})     
	