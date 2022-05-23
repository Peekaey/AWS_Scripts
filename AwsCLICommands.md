# AWS CLI Commands for reference

### Example of schedule expression using CLI
aws events put-rule --schedule-expression "rate(5 minutes)" --name _rulename_
