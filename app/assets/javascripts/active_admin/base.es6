import 'jquery'
import '../../../../vendor/assets/javascripts/jquery-ui/widgets/datepicker'
import '../../../../vendor/assets/javascripts/jquery-ui/widgets/dialog'
import '../../../../vendor/assets/javascripts/jquery-ui/widgets/sortable'
import '../../../../vendor/assets/javascripts/jquery-ui/widgets/tabs'
import '../../../../vendor/assets/javascripts/jquery-ui/widget'
import 'jquery-ujs'

window.ActiveAdmin = {}

require('./ext/jquery.es6');
require('./ext/jquery-ui.es6');
require('./lib/active_admin.es6');
require('./lib/batch_actions.es6');
require('./lib/dropdown-menu.es6');
require('./lib/has_many.es6');
require('./lib/modal_dialog.es6');
require('./lib/per_page.es6');
require('./lib/checkbox-toggler.es6');
require('./lib/table-checkbox-toggler.es6');
require('./initializers/datepicker.es6');
require('./initializers/filters.es6');
require('./initializers/tabs.es6');
