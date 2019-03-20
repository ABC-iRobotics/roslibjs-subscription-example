const RobotSubscriber = require('./robot-subscriber.js')

// VPS in AWS running an UR5 ROS setup
const options = {
  name: 'ur_description',
  rosIP: '3.120.104.148:9090',
  baseLink: 'base_link'
}

tester = new RobotSubscriber(options)
