from linkedin import linkedin

API_KEY = 'wFNJekVpDCJtRPFX812pQsJee-gt0zO4X5XmG6wcfSOSlLocxodAXNMbl0_hw3Vl'
API_SECRET = 'daJDa6_8UcnGMw1yuq9TjoO_PMKukXMo8vEMo7Qv5J-G3SPgrAV0FqFCd0TNjQyG'
RETURN_URL = 'http://localhost:8000'

authentication = linkedin.LinkedInAuthentication(API_KEY, API_SECRET, RETURN_URL, linkedin.PERMISSIONS.enums.values())
print (authentication.authorization_url ) # open this url on your browser
application = linkedin.LinkedInApplication(authentication)
authentication.authorization_code = 'AQTXrv3Pe1iWS0EQvLg0NJA8ju_XuiadXACqHennhWih7iRyDSzAm5jaf3R7I8'
authentication.get_access_token()
print(application.search_profile(selectors=[{'people': ['first-name', 'last-name']}], params={'keywords': 'web developer'}))