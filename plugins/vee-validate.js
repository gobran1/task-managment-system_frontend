import {extend} from "vee-validate";
import {email, max, max_value, min, numeric, required} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This {_field_} field is required"
});

extend("numeric", {
  ...numeric,
  message: "{_field_} field must be a numeric"
});

extend("max_value", {
  ...max_value,
  message: "{_field_} field must be smaller than {max}"
});

extend("positive_number", {
  validate(value, args) {
    return value > 0;
  },
  message: "{_field_} field must be positive"
});

extend("max", {
  ...max,
  message: "This {_field_} field must be {length} characters or less"
});


extend("min", {
  ...min,
  message: "This {_field_} field must be {length} characters or more"
});

extend("email", {
  ...email,
  message: "This {_field_} field must be a valid email"
});

extend("confirmed", {
  validate(value, args) {
    return value === args.password;
  },
  params: ['password'],
  message: "This {_field_} field confirmation does not match"
});
