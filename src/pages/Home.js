import React from 'react'
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import BackgroundImage from '@images/desktop/background.jpg'
import Image from '@components/Image'
import homeStyles from '@styles/pages/Home'

const Home = () => {
  const { classes } = homeStyles()
  return (
    <>
      <Box className={classes.heroWrapper}>
        <Box className={classes.heroGradient} />
        <Image
          src={BackgroundImage}
          width="100%"
          height="100%"
          alt="Tiara Background"
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction="column"
              spacing={{ xs: 2 }}
              className={classes.heroContentWrapper}
            >
              <Typography
                variant="h1"
                gutterBottom
                className={classes.heroContentH1}
              >
                Welcome to tiara nail spa
              </Typography>
              <Typography
                variant="body1"
                fontWeight="200"
                gutterBottom
                className={classes.heroContentDescription}
              >
                Let us give your nails a treatment!
              </Typography>
              <Grid container rowSpacing={2} columnSpacing={{ md: 4 }}>
                <Grid item xs={12} md={4}>
                  <Card elevation={0} className={classes.heroCard}>
                    <CardContent>
                      <Stack
                        direction={{ xs: 'row', lg: 'column' }}
                        spacing={2}
                        className={classes.heroCardContentStack}
                      >
                        <Box>
                          <LocationOnOutlinedIcon fontSize="large" />
                        </Box>
                        <Box>
                          <Typography
                            fontWeight="bold"
                            className={classes.heroCardContentText}
                            variant="body1"
                          >
                            Prime Plaza, 3rd Floor, Room 401, Nakuru
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card elevation={0} className={classes.heroCard}>
                    <CardContent>
                      <Stack
                        direction={{ xs: 'row', lg: 'column' }}
                        spacing={2}
                        className={classes.heroCardContentStack}
                      >
                        <Box>
                          <AccessTimeOutlinedIcon fontSize="large" />
                        </Box>
                        <Box>
                          <Typography
                            fontWeight="bold"
                            className={classes.heroCardContentText}
                            variant="body1"
                            gutterBottom
                          >
                            Monday - Friday : 09:00 - 17:00
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            className={classes.heroCardContentText}
                            variant="body1"
                            gutterBottom
                          >
                            Saturday : 11:00 - 17:00
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            className={classes.heroCardContentText}
                            variant="body1"
                            gutterBottom
                          >
                            Sunday : 14:00 - 17:00
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card elevation={0} className={classes.heroCard}>
                    <CardContent>
                      <Stack
                        direction={{ xs: 'row', lg: 'column' }}
                        spacing={2}
                        className={classes.heroCardContentStack}
                      >
                        <Box>
                          <ContactsOutlinedIcon fontSize="large" />
                        </Box>
                        <Box>
                          <Typography
                            fontWeight="bold"
                            className={classes.heroCardContentText}
                            variant="body1"
                            gutterBottom
                          >
                            tiara@nailspa.com
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            className={classes.heroCardContentText}
                            variant="body1"
                            gutterBottom
                          >
                            +254712293003
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box className={classes.heroBookAppointmentBtnWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.heroBookAppointmentBtn}
                  disableElevation
                  disableRipple
                >
                  <Typography
                    variant="subtitle2"
                    className={classes.heroBookAppointmentBtnText}
                  >
                    Book Appointment Now!
                  </Typography>
                </Button>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default React.memo(Home)
