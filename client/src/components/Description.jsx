import React, { useState, useEffect } from 'react';

const Description = (props) => {

  const [fullListFeaturesDesc, setFullListFeaturesDesc] = useState([]);

  var jsonString = props.featuresPrimaryProductString;

  useEffect(() => {

    if (!props.featuresPrimaryProductString) {
      // console.log('returning not JSON string...')
      return;
    }

    // console.log('INSIDE props.featuresPrimaryProductString');
    var compareMaster = [];
    var compareMasterFiltered = [];

    (async (featuresP) => {

      const myAsyncParseInfoDesc = async (str) => {
        return JSON.parse(str);
        // need a catch
      };

      try {
        // console.log("🚀 ~ file: Description.jsx:38 ~ p1", featuresP)
        var parsePrimaryInfo = await myAsyncParseInfoDesc(featuresP);

        (async (cb) => {
          try {
            for (var i = 0; i < parsePrimaryInfo.length; i++) {
              var objP = parsePrimaryInfo[i];
              if (objP.valuePrimary !== null) {
                var pRow = [1, objP.featurePrimary, objP.valuePrimary, 0];
                compareMaster.push(pRow);
              } else {
                var pRow = [1, objP.featurePrimary, '', 0];
                compareMaster.push(pRow);
              }
            }
          } catch (err) {
            console.error(err)
          } finally {
            cb(null)
          }
        })((err) => {
          if (err) {
            throw err;
          } else {

            for (var i = 0; i < compareMaster.length; i++) {
              var currentCompareMaster = compareMaster[i];

              if (compareMasterFiltered.length === 0) {

                compareMasterFiltered.push(currentCompareMaster);
              } else {
                for (var j = 0; j < compareMasterFiltered.length; j++) {
                  var currentCompareMasterFiltered = compareMasterFiltered[j];
                  if (currentCompareMasterFiltered[1] === currentCompareMaster[1] && currentCompareMasterFiltered[2] === currentCompareMaster[2]) {
                    break;
                  }
                  if (compareMasterFiltered.length - 1 === j) {
                    compareMasterFiltered.push(currentCompareMaster);
                  }
                }
              }
            }
          }
        })
      } catch (err) {
        console.error(err)
      } finally {
        setFullListFeaturesDesc(compareMasterFiltered);
      }
    })(jsonString)

  }, [jsonString])

  return (
    <div moduleName="Overview" className="lineAnchor" moduleName="Overview">
      <div moduleName="Overview" className='middle-columnDesc verticalLine'></div>
      <div moduleName="Overview" className="rowDesc">
        <div moduleName="Overview" className="first-columnDesc">
          <h3 moduleName="Overview" style={{fontSize: 15}}>{props.slogan}</h3>
          <div moduleName="Overview" style={{fontSize: 15}}>{props.desc}</div>
        </div>


        <div moduleName="Overview" className="second-columnDesc">

          {fullListFeaturesDesc.map((item, index) => {
            return (
              <div moduleName="Overview" className='rowDesc2' key={index}>
                <div moduleName="Overview" style={{fontSize: 15}} className="columnCheck" style={{ opacity: item[0] }}>&#x2713;</div>
                <div moduleName="Overview" style={{fontSize: 15}} className="columnFeature"> <a moduleName="Overview" class="boldFont">{item[1]}</a> <a moduleName="Overview" >{' ' + item[2]}</a> </div>
              </div>
            )
          })}


        </div>
      </div>
    </div>
  );
};

export default Description;