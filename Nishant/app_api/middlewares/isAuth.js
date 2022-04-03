const jwt = require( 'jsonwebtoken' );

module.exports = ( req, res, next ) => {
  const token = req.get( 'x-auth-token' );
  // If no token
  if ( !token ) {
    return res.status( 401 ).json( { errors: [ { msg: 'Invalid token, not logged in' } ] } );
  }
  // Verify token
  try {
    const verifiedToken = jwt.verify( token, "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ" );
    req.user = verifiedToken.user;
    next();
  } catch ( err ) {
    res.status( 401 ).json( { errors: [ { msg: 'Invalid token' } ] } );
  }
};
