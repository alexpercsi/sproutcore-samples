// ==========================================================================
// Project:   TableView - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TableView */


var tableColumns = [
  SC.TableColumn.create({
    key:   'displayName',
    label: 'Title',
    width: 150
  }),
  
  SC.TableColumn.create({
    key:   'rating',
    label: 'Rating',
    width: 80,
  }),
  SC.TableColumn.create({
    key:   'votes',
    label: 'Votes',
    width: 80,
	})


];

// This page describes the main user interface for your application.  
TableView.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    backgroundColor: "#333",
    
    childViews: 'topView middleView bottomView'.w(),
		childViews: ['topView', 'middleView'],
    
    topView: SC.View.design( {
			classNames: ['endash-toolbar'],
      layout: { top: 0, left: 0, right: 0, height: 50 }
    }),
    
    middleView: SC.TableView.design({
	// contentView: SC.DataView.design({
      backgroundColor: "white",
      
      columns: tableColumns,
      // flexibleColumn:   tableColumns.objectAt(0),
      dataSourceBinding:   'TableView.moviesController.arrangedObjects',
// contentBinding:   'TableView.moviesController',
      selectionBinding: 'TableView.moviesController.selection',
      canReorderContent: YES,
    // }),
      layout: { top: 51, bottom: 0, left: 0, right: 0 }
			}),

    bottomView: SC.View.design(SC.Border, {
      layout: { bottom: 0, left: 0, right: 0, height: 41 },
      childViews: 'summaryView'.w(),
      borderStyle: SC.BORDER_TOP,

      summaryView: SC.LabelView.design({
        layout: { centerY: 0, height: 18, left: 20, right: 20 },
        textAlign: SC.ALIGN_CENTER,

        valueBinding: "TableView.moviesController.summary"
      })
    })
  })

});
