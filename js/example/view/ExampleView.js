// Copyright 2002-2013, University of Colorado Boulder

/**
 * View for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var BarMagnetNode = require( 'EXAMPLE_SIM/example/view/BarMagnetNode' );
  var Bounds2 = require( 'DOT/Bounds2' );
  var ControlPanel = require( 'EXAMPLE_SIM/example/view/ControlPanel' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {BarMagnetModel} model
   * @constructor
   */
  function ExampleView( model ) {

    var thisView = this;
    ScreenView.call( thisView );

    // model-view transform
    var mvt = new ModelViewTransform2.createOffsetScaleMapping( new Vector2( thisView.layoutBounds.width / 2, thisView.layoutBounds.height / 2 ), 1 );

    thisView.addChild( new BarMagnetNode( model.barMagnet, mvt ) );
    thisView.addChild( new ControlPanel( model, { x: 50, y: 50 } ) );
  }

  return inherit( ScreenView, ExampleView, {layoutBounds: new Bounds2( 0, 0, 1024, 768 )} );
} );