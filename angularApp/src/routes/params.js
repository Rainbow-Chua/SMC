var params = {};

params['BACKEND_API_URL'] = process.env.BACKEND_API_URL;
params['OIDC_ISSUER'] = process.env.OIDC_ISSUER;
params['OIDC_AUTHORIZATION_URL'] = process.env.OIDC_AUTHORIZATION_URL;
params['OIDC_TOKEN_URL'] = process.env.OIDC_TOKEN_URL;
params['OIDC_USER_INFO_URL'] = process.env.OIDC_USER_INFO_URL;
params['OIDC_CLIENT_ID'] = process.env.OIDC_CLIENT_ID;
params['OIDC_SCOPE'] = process.env.OIDC_SCOPE;

module.exports = function(req, res) {
  res.send(JSON.stringify(params));
};

