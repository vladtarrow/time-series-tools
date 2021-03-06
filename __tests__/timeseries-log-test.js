jest.autoMockOff();

var fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('timeseries-log-test.log'));
  
describe('log', function(){
  var ts = require('../src/timeseries');
  
  it('returns correct values', function(){
    log.info('SPEC: log returns correct values');
	
	var list = [9, 5, -40, 1, 14];
	var ts1 = ts.Timeseries(list, null);
	var actual = ts1.log().dataValues;
	var expected = [3.912023005428146,3.828641396489095,0,3.7376696182833684,4.007333185232471];

	log.info("Input: " + list);
	log.info("Expected: " + expected);
	log.info("Actual: " + actual);

	for(var i = 0; i < expected.length; i++){
		expect(actual[i]).toBeCloseTo(expected[i], 12);
	}
  });
});