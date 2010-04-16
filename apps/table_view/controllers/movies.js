// ==========================================================================
// Project:   TableView.moviesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TableView */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
TableView.moviesController = SC.ArrayController.create(
/** @scope TableView.moviesController.prototype */ {

  summary: function() {
    var sel = this.get('selection');
    return sel ? "%@ votes".fmt(sel.get('votes')) : "";
  }.property().cacheable(),
  
  // property dependencies only work on the current object so we need to 
  // manually add an observer since the selection itself may not change
  selectionDidChange: function() {
    console.log('selectionDidChange1');
    this.notifyPropertyChange('summary');
  }.observes('*selection.[]'),

	valueForRowAndColumnInTableView: function(row, column, tableView) {
		var item = this.objectAt(row),
			columns = tableView.get('columns'),
			column = columns.objectAt(column),
			key = column.get('key')

		return item.get(key)
	}
  
}) ;
